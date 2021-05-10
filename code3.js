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
gdjs.Unlock_32IngredientsCode.GDFood5Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood5Objects2= [];
gdjs.Unlock_32IngredientsCode.GDFood6Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood6Objects2= [];
gdjs.Unlock_32IngredientsCode.GDFood7Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood7Objects2= [];
gdjs.Unlock_32IngredientsCode.GDFood8Objects1= [];
gdjs.Unlock_32IngredientsCode.GDFood8Objects2= [];
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
gdjs.Unlock_32IngredientsCode.GDPerk2Objects1= [];
gdjs.Unlock_32IngredientsCode.GDPerk2Objects2= [];
gdjs.Unlock_32IngredientsCode.GDPerkObjects1= [];
gdjs.Unlock_32IngredientsCode.GDPerkObjects2= [];
gdjs.Unlock_32IngredientsCode.GDPrice1Objects1= [];
gdjs.Unlock_32IngredientsCode.GDPrice1Objects2= [];
gdjs.Unlock_32IngredientsCode.GDPrice2Objects1= [];
gdjs.Unlock_32IngredientsCode.GDPrice2Objects2= [];
gdjs.Unlock_32IngredientsCode.GDPrice3Objects1= [];
gdjs.Unlock_32IngredientsCode.GDPrice3Objects2= [];
gdjs.Unlock_32IngredientsCode.GDPrice4Objects1= [];
gdjs.Unlock_32IngredientsCode.GDPrice4Objects2= [];
gdjs.Unlock_32IngredientsCode.GDBuy4Objects1= [];
gdjs.Unlock_32IngredientsCode.GDBuy4Objects2= [];
gdjs.Unlock_32IngredientsCode.GDBuy3Objects1= [];
gdjs.Unlock_32IngredientsCode.GDBuy3Objects2= [];
gdjs.Unlock_32IngredientsCode.GDBuy2Objects1= [];
gdjs.Unlock_32IngredientsCode.GDBuy2Objects2= [];
gdjs.Unlock_32IngredientsCode.GDBuy1Objects1= [];
gdjs.Unlock_32IngredientsCode.GDBuy1Objects2= [];

gdjs.Unlock_32IngredientsCode.conditionTrue_0 = {val:false};
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0 = {val:false};
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0 = {val:false};
gdjs.Unlock_32IngredientsCode.condition2IsTrue_0 = {val:false};
gdjs.Unlock_32IngredientsCode.conditionTrue_1 = {val:false};
gdjs.Unlock_32IngredientsCode.condition0IsTrue_1 = {val:false};
gdjs.Unlock_32IngredientsCode.condition1IsTrue_1 = {val:false};
gdjs.Unlock_32IngredientsCode.condition2IsTrue_1 = {val:false};


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


};gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy1Objects1Objects = Hashtable.newFrom({"Buy1": gdjs.Unlock_32IngredientsCode.GDBuy1Objects1});gdjs.Unlock_32IngredientsCode.eventsList1 = function(runtimeScene) {

{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) >= 500;
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5));
}{runtimeScene.getGame().getVariables().getFromIndex(10).sub(500);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(5);
}}

}


};gdjs.Unlock_32IngredientsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buy1"), gdjs.Unlock_32IngredientsCode.GDBuy1Objects1);

gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy1Objects1Objects, runtimeScene, true, false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy2Objects1Objects = Hashtable.newFrom({"Buy2": gdjs.Unlock_32IngredientsCode.GDBuy2Objects1});gdjs.Unlock_32IngredientsCode.eventsList3 = function(runtimeScene) {

{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) >= 1000;
}if ( gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val ) {
{
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 5;
}}
if (gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6));
}{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1000);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(6);
}}

}


};gdjs.Unlock_32IngredientsCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buy2"), gdjs.Unlock_32IngredientsCode.GDBuy2Objects1);

gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy3Objects1Objects = Hashtable.newFrom({"Buy3": gdjs.Unlock_32IngredientsCode.GDBuy3Objects1});gdjs.Unlock_32IngredientsCode.eventsList5 = function(runtimeScene) {

{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) >= 1500;
}if ( gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val ) {
{
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 6;
}}
if (gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(7);
}{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7));
}{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1500);
}}

}


};gdjs.Unlock_32IngredientsCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buy3"), gdjs.Unlock_32IngredientsCode.GDBuy3Objects1);

gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy3Objects1Objects, runtimeScene, true, false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy4Objects1Objects = Hashtable.newFrom({"Buy4": gdjs.Unlock_32IngredientsCode.GDBuy4Objects1});gdjs.Unlock_32IngredientsCode.eventsList7 = function(runtimeScene) {

{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) >= 3000;
}if ( gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val ) {
{
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 7;
}}
if (gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(8);
}{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8));
}{runtimeScene.getGame().getVariables().getFromIndex(10).sub(3000);
}}

}


};gdjs.Unlock_32IngredientsCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buy4"), gdjs.Unlock_32IngredientsCode.GDBuy4Objects1);

gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Unlock_32IngredientsCode.mapOfGDgdjs_46Unlock_9532IngredientsCode_46GDBuy4Objects1Objects, runtimeScene, true, false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Unlock_32IngredientsCode.eventsList9 = function(runtimeScene) {

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


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Unlock_32IngredientsCode.GDCoinsObjects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDCoinsObjects1[i].setString("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10))));
}
}}

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


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}if ( gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val ) {
{
{gdjs.Unlock_32IngredientsCode.conditionTrue_1 = gdjs.Unlock_32IngredientsCode.condition1IsTrue_0;
gdjs.Unlock_32IngredientsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10550548);
}
}}
if (gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Buy1"), gdjs.Unlock_32IngredientsCode.GDBuy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food6"), gdjs.Unlock_32IngredientsCode.GDFood6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Lock5"), gdjs.Unlock_32IngredientsCode.GDLock5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Price1"), gdjs.Unlock_32IngredientsCode.GDPrice1Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDPrice1Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDPrice1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDBuy1Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDBuy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock5Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock5Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDFood6Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDFood6Objects1[i].setOpacity(1000);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
}if ( gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val ) {
{
{gdjs.Unlock_32IngredientsCode.conditionTrue_1 = gdjs.Unlock_32IngredientsCode.condition1IsTrue_0;
gdjs.Unlock_32IngredientsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10551948);
}
}}
if (gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Buy2"), gdjs.Unlock_32IngredientsCode.GDBuy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food7"), gdjs.Unlock_32IngredientsCode.GDFood7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Lock6"), gdjs.Unlock_32IngredientsCode.GDLock6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Price2"), gdjs.Unlock_32IngredientsCode.GDPrice2Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDPrice2Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDPrice2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDBuy2Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDBuy2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDFood7Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDFood7Objects1[i].setOpacity(1000);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock6Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock6Objects1[i].setAnimation(1);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
}if ( gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val ) {
{
{gdjs.Unlock_32IngredientsCode.conditionTrue_1 = gdjs.Unlock_32IngredientsCode.condition1IsTrue_0;
gdjs.Unlock_32IngredientsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10553332);
}
}}
if (gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Buy3"), gdjs.Unlock_32IngredientsCode.GDBuy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food8"), gdjs.Unlock_32IngredientsCode.GDFood8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Lock7"), gdjs.Unlock_32IngredientsCode.GDLock7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Price3"), gdjs.Unlock_32IngredientsCode.GDPrice3Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDPrice3Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDPrice3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDBuy3Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDBuy3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock7Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock7Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDFood8Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDFood8Objects1[i].setOpacity(1000);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val ) {
{
{gdjs.Unlock_32IngredientsCode.conditionTrue_1 = gdjs.Unlock_32IngredientsCode.condition1IsTrue_0;
gdjs.Unlock_32IngredientsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10554772);
}
}}
if (gdjs.Unlock_32IngredientsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Buy4"), gdjs.Unlock_32IngredientsCode.GDBuy4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Lock8"), gdjs.Unlock_32IngredientsCode.GDLock8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Price4"), gdjs.Unlock_32IngredientsCode.GDPrice4Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDPrice4Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDPrice4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDBuy4Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDBuy4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDLock8Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDLock8Objects1[i].setAnimation(1);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Food6"), gdjs.Unlock_32IngredientsCode.GDFood6Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDFood6Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDFood6Objects1[i].setOpacity(150);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Food7"), gdjs.Unlock_32IngredientsCode.GDFood7Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDFood7Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDFood7Objects1[i].setOpacity(150);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Food8"), gdjs.Unlock_32IngredientsCode.GDFood8Objects1);
{for(var i = 0, len = gdjs.Unlock_32IngredientsCode.GDFood8Objects1.length ;i < len;++i) {
    gdjs.Unlock_32IngredientsCode.GDFood8Objects1[i].setOpacity(150);
}
}}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = false;
{
gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Unlock_32IngredientsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Unlock_32IngredientsCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

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
gdjs.Unlock_32IngredientsCode.GDFood5Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood5Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood6Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood6Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood7Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood7Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood8Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDFood8Objects2.length = 0;
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
gdjs.Unlock_32IngredientsCode.GDPerk2Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDPerk2Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDPerkObjects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDPerkObjects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice1Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice1Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice2Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice2Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice3Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice3Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice4Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDPrice4Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy4Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy4Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy3Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy3Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy2Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy2Objects2.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy1Objects1.length = 0;
gdjs.Unlock_32IngredientsCode.GDBuy1Objects2.length = 0;

gdjs.Unlock_32IngredientsCode.eventsList9(runtimeScene);
return;

}

gdjs['Unlock_32IngredientsCode'] = gdjs.Unlock_32IngredientsCode;
