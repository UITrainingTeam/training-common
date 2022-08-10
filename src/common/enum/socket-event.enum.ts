export enum SocketEventType {
    TEST = 'test',
    PINGPONG = 'pingpong',
    JOIN_ROOM = 'subscribe',
    LEAVE_ROOM = 'unsubscribe',
    USER_METADATA = 'user-metadata',
    MESSAGE = 'message',
    CHANNEL_READY = 'channelCreated',
    REQUEST_JOIN_CHANNEL = 'requestJoinChannel',
    RESPONSE_JOIN_CHANNEL = 'responseJoinChannel',
    ADD_MEMBER = 'addMember',
    REMOVE_MEMBER = 'removeMember'
}
