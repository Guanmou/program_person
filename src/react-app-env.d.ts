/// <reference types="react-scripts" />
//ts 不认识less文件 需要在此全局声明
declare module "*.less" {
    const content: { [className: string]: string };
    export default content;
}
declare module "*.scss" {
    const content: { [className: string]: string };
    export default content;
}