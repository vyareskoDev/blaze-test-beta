import OptionType from "../types/OptionType";

export default interface Option {
    type: OptionType;
    value: string | string[];
    attachments: string[];
}