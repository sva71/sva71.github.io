const app = new Vue({

    el: '#app',

    data: {
        baseUrl: 'https://tala.cloudi.es/routes/26bb36adfb',
        auth: {
            username: 'warrior',
            password: 'ArmyOfCyborgs'
        },
        gridOptions: {
            columnDefs: [
                {headerName: '#', sortable: true, field: 'taskId', width: 100},
                {headerName: 'Автор', sortable: true, field: 'authorPseudo', width: 200},
                {headerName: 'Створено', sortable: true, field: 'ts'},
                {headerName: 'Опис', sortable: true, field: 'details'},
                {headerName: 'Платформа', sortable: true, field: 'platform'},
                {
                    headerName: 'Посилання', sortable: true, field: 'link',
                    cellRenderer: params => {
                        return `<a href="${params.value}" target="_blank">link</a>`
                    }
                },
                {headerName: 'Тип', sortable: true, field: 'type'},
                {
                    headerName: 'Дозвіл', field: 'enabled', editable: false,
                    cellRenderer: params => {
                        return `<input type='checkbox' disabled ${params.value ? 'checked' : ''} />`;
                    }
                }
            ],
            rowData: [],
            rowSelection: 'single',
            onCellClicked: () => app.gridClick(),
            onCellDoubleClicked: () => app.editTaskClick()
        },
        platforms: ['facebook', 'twitter', 'telegram', 'president', 'change_org'],
        taskTypes: ['petition', 'report', 'archived'],
        modalShow: false,
        deleteModalShow: false,
        appending: false,
        editing: false,
        buf: {
            taskId: 0,
            authorPseudo: '',
            details: '',
            platform: '',
            link: '',
            type: ''
        }
    },

    mounted: function() {
        const eGridDiv = document.querySelector('#myGrid');
        new agGrid.Grid(eGridDiv, this.gridOptions);
        this.readData();
    },

    methods: {

        readData() {
            axios.get(this.baseUrl + '/tasks', { auth: this.auth })
                .then(response => {
                    for (let item of response.data) {
                        this.gridOptions.rowData.push({
                            taskId: item['taskID'],
                            authorPseudo: item['author']['pseudo'],
                            ts: new Date(item['ts']).toLocaleDateString() + ' ' + new Date(item['ts']).toLocaleTimeString(),
                            details: item['details'],
                            platform: item['platform'],
                            link: item['link'],
                            type: item['type'],
                            enabled: item['enabled']
                        });
                    }
                    this.gridOptions.api.setRowData(this.gridOptions.rowData);
                })
                .catch(err => {
                    console.error(err.message);
                })
                .finally(() => this.gridOptions.api.sizeColumnsToFit())
        },

        append() {
            axios.post(this.baseUrl + '/task', {
                details: this.buf.details,
                link: this.buf.link,
                platform: this.buf.platform,
                type: this.buf.type
            }, { auth: this.auth })
                .then(response => {
                    this.buf.taskId = response.data.task.taskID;
                    this.buf.authorPseudo = response.data.task.author.pseudo;
                    this.buf.ts = response.data.task.ts;
                    this.buf.enabled = false;
                    this.gridOptions.rowData.push(this.buf);
                    this.gridOptions.api.setRowData(this.gridOptions.rowData);
                    this.clearBuf();
                })
                .catch(err => console.error(err.message));
        },

        edit() {
            axios.put(this.baseUrl + '/task', {
                taskID: this.buf.taskId,
                details: this.buf.details,
                link: this.buf.link,
                platform: this.buf.platform,
                type: this.buf.type,
                enabled: this.buf.enabled
            }, { auth: this.auth})
                .then(response => {
                    if (response.data.updated && response.data.updated === 1) {
                        let i = this.gridOptions.rowData.findIndex(item => item.taskId === this.buf.taskId);
                        this.gridOptions.rowData[i] = {...this.buf};
                        this.gridOptions.api.setRowData(this.gridOptions.rowData);
                        this.clearBuf();
                    }
                })
                .catch(err => console.error(err.message))
        },

        delete() {
            axios.delete(this.baseUrl + '/task', { auth: this.auth, data: { taskID: this.buf.taskId } })
                .then(response => {
                    if (response.data.archived && response.data.archived === 1) {
                        let selectedNodes = this.gridOptions.api.getSelectedNodes();
                        let id = selectedNodes[0].data.taskId;
                        let i = this.gridOptions.rowData.findIndex(item => item.taskId === id);
                        this.gridOptions.rowData.splice(i, 1);
                        this.gridOptions.api.setRowData(this.gridOptions.rowData);
                        this.clearBuf();
                    }
                });
        },

        clearBuf() {
            this.buf = {
                taskId: 0,
                authorPseudo: '',
                details: '',
                platform: '',
                link: '',
                type: ''
            }
        },

        gridClick() {
            let selectedNodes = this.gridOptions.api.getSelectedNodes();
            if (selectedNodes.length) {
                this.buf.taskId = selectedNodes[0].data.taskId;
            }
        },

        createTaskClick() {
            this.clearBuf();
            this.appending = true;
            $('#task-modal').modal('show');
        },

        editTaskClick() {
            let selectedNodes = this.gridOptions.api.getSelectedNodes();
            if (selectedNodes.length) {
                this.editing = true;
                this.buf = {...selectedNodes[0].data};
                $('#task-modal').modal('show');
            }
        },

        modalOk() {
            if (this.appending) { this.append() }
            if (this.editing) { this.edit() }
            this.appending = false;
            this.editing = false;
            $('#task-modal').modal('hide');
        },

        modalCancel() {
            this.appending = false;
            this.editing = false;
            $('#task-modal').modal('hide');
        },

        deleteTaskClick() {
            let selectedNodes = this.gridOptions.api.getSelectedNodes();
            if (selectedNodes.length) {
                $('#delete-confirm').modal('show');
            }
        },

        deleteModalOk() {
            $('#delete-confirm').modal('hide');
            this.delete();
        },

        deleteModalCancel() {
            $('#delete-confirm').modal('hide');
        }

    }

});
