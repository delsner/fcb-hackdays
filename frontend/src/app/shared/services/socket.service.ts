import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

const SOCKET_SERVER = '/api/socket-io';

@Injectable()
export class SocketService {
    private socket: any;

    constructor() {
        this.connect();
    }

    connect() {
        this.socket = io({path: SOCKET_SERVER});
    }

    send(event, data) {
        this.socket.emit(event, data);
    }

    disconnect() {
        this.socket.disconnect();
    }

    addSocketListener(event, callback) {
        this.socket.on(event, callback);
    }
}
