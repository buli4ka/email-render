import {render} from "@react-email/render";
import NotionMagicLinkEmail from "./emails/notion-magic-link";


export async function getHtml(name: string) {
    return render(NotionMagicLinkEmail({loginCode: name}));

}