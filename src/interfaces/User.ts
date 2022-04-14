
export interface User {
    id:    string;
    name:  string;
    token: string;
    message?: string
}

export interface Errors {
    message: Message[];
}

export interface Message {
    msg:      string;
    param:    string;
    location: string;
}
