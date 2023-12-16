interface OutputViewType {
    addClassSnake : (y : number, x : number) => void,
    removeClassSnake : (y : number, x : number) => void,
    addClassPoint : (y : number, x : number) => void,
    removeClassPoint : (y : number, x : number) => void,
    removeClassName : (y : number , x : number) => void,
    setTableColor : (color : string) => void,
    removeClassColor : (y : number, x : number, color : string) => void,
    setDpPoint : (point : number) => void,
    addFocusOnButton : (element : HTMLElement) => void,
    removeFocusOnButton : (element : HTMLElement) => void,
}

export {OutputViewType};