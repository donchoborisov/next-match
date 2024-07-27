import { Prisma } from "@prisma/client";

type ActionResult<T> = {status:'success', data:T} | {status:'error', error:string | ZodIssue[]}


type MessageWithSenderRecepient = Prisma.MessagePayload<{
    select: {
        id: true,
        text: true,
        created: true,
        dateRead: true,
        sender: {
            select: {userId, name, image}
        },
        recepient: {
            select: {userId, name, image}
        }
    }
}>


type MessageDto = {
    id: string;
    text: string;
    created: string;
    dateRead: string | null;
    senderId?: string;
    senderName?: string;
    senderImage?: string | null;
    recepientId?: string;
    recepientName?: string;
    recepientImage?: string | null;
}