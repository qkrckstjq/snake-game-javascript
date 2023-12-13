import { ConditionValue } from "./Enums/ConditionValue";
function Game() {
    this.point = 0;
    this.isModal = false;
    this.speed = ConditionValue.normal;
    this.isProceeding = false;
    this.canPlay = true;
}
export { Game };
