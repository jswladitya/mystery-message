//not actual response but defining type of response  
import {Message} from '@/model/User'

export interface ApiResponse{
    // i am dealing with the messages, so i need message type to resolve typeScript errors
    success : boolean;
    message: string;
    isAcceptingMessage?: boolean
    messages?: Array<Message>;
}