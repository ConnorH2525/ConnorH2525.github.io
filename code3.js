gdjs.Unlock_32IngredientsCode = {};
gdjs.Unlock_32IngredientsCode.GDTitleObjects1= [];
gdjs.Unlock_32IngredientsCode.GDTitleObjects2= [];
gdjs.Unlock_32IngredientsCode.GDCoinsObjects1= [];
gdjs.Unlock_32IngredientsCode.GDCoinsObjects2= [];
gdjs.Unlock_32IngredientsCode.GDBackButtonObjects1= [];
gdjs.Unlock_32IngredientsCode.GDBackButtonObjects2= [];
gdjs.Unlock_32IngredientsCode.GDFood1Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood1Objects2= [];
gdjs.Unlock_32IngredientsCode.GDFood2Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood2Objects2= [];
gdjs.Unlock_32IngredientsCode.GDFood3Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood3Objects2= [];
gdjs.Unlock_32IngredientsCode.GDFood4Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood4Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock12Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock12Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock11Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock11Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock10Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock10Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock9Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock9Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock8Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock8Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock7Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock7Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock6Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock6Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock5Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock5Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock4Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock4Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock3Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock3Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock2Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock2Objects2= [];
gdjs.Unlock_32IngredientsCode.GDLock1Objects1= [];
gdjs.Unlock_32IngredientsCode.GDLock1Objects2= [];

gdjs.Unlock_32IngredientsCode.conditionTrue_0 = {val:false};
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0 = {val:false};
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0 = {val:false};


gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Unlock_32IngredientsCode.GDBackButtonObjects1});gdjs.Unlock_32IngredientsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Unlock_32IngredientsCode.GDBackButtonObjects1);

gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.Unlock_32IngredientsCode.eventsList1 = function(runtimeScene) {

{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lock1"), gdjs.Unlock_32IngredientsCode.GDLock1Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock1Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock1Objects1[i].setAnimation(1);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lock2"), gdjs.Unlock_32IngredientsCode.GDLock2Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock2Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock2Objects1[i].setAnimation(1);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lock3"), gdjs.Unlock_32IngredientsCode.GDLock3Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock3Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock3Objects1[i].setAnimation(1);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lock4"), gdjs.Unlock_32IngredientsCode.GDLock4Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock4Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock4Objects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Unlock_32IngredientsCode.GDCoinsObjects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDCoinsObjects1[i].setString("Coins: " + (gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}}

}


};

gdjs.Unlock_32IngredientsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Unlock_32IngredientsCode.GDTitleObjects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDTitleObjects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDCoinsObjects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDCoinsObjects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDBackButtonObjects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDBackButtonObjects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood1Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood1Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood2Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood2Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood3Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood3Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood4Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood4Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock12Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock12Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock11Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock11Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock10Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock10Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock9Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock9Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock8Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock8Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock7Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock7Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock6Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock6Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock5Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock5Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock4Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock4Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock3Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock3Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock2Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock2Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock1Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDLock1Objects2.length = 0;

gdjs.Unlock_32IngredientsCode.eventsList1(runtimeScene);
return;

}

gdjs['Unlock_32IngredientsCode'] = gdjs.Unlock_32IngredientsCode;
