export default function IsEmptyObject(obj: object)
{
    return Object.keys(obj).length === 0;
}