import { Message } from "@prisma/client";
import { formatShortDateTime } from "./util";
import { MessageWithSenderRecepient } from "@/types";



export function mapMessageToMessageDto(message: MessageWithSenderRecepient) {

    return {

        id: message.id,
        text: message.text,
        created: formatShortDateTime(message.created),
        dateRead: message.dateRead ? formatShortDateTime(message.dateRead) : null,
        senderId:message.sender?.userId,
        senderName: message.sender?.name,
        senderImage: message.sender?.image,
        recepientId: message.recepient?.userId,
        recepientImage: message.recepient?.image,
        recepientName: message.recepient?.name
        
    }

}