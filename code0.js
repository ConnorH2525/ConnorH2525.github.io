gdjs.MenuCode = {};
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObject2Objects1= [];
gdjs.MenuCode.GDNewObject2Objects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDScreenObjects1= [];
gdjs.MenuCode.GDScreenObjects2= [];
gdjs.MenuCode.GDDevTextObjects1= [];
gdjs.MenuCode.GDDevTextObjects2= [];
gdjs.MenuCode.GDInstructionsObjects1= [];
gdjs.MenuCode.GDInstructionsObjects2= [];
gdjs.MenuCode.GDInstructions2Objects1= [];
gdjs.MenuCode.GDInstructions2Objects2= [];
gdjs.MenuCode.GDNewObject5Objects1= [];
gdjs.MenuCode.GDNewObject5Objects2= [];
gdjs.MenuCode.GDNewObject6Objects1= [];
gdjs.MenuCode.GDNewObject6Objects2= [];
gdjs.MenuCode.GDNewObject7Objects1= [];
gdjs.MenuCode.GDNewObject7Objects2= [];
gdjs.MenuCode.GDNewObject8Objects1= [];
gdjs.MenuCode.GDNewObject8Objects2= [];
gdjs.MenuCode.GDLeaderboardsObjects1= [];
gdjs.MenuCode.GDLeaderboardsObjects2= [];
gdjs.MenuCode.GDNAObjects1= [];
gdjs.MenuCode.GDNAObjects2= [];
gdjs.MenuCode.GDSoundObjects1= [];
gdjs.MenuCode.GDSoundObjects2= [];
gdjs.MenuCode.GDNewObject3Objects1= [];
gdjs.MenuCode.GDNewObject3Objects2= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDNewObject4Objects1= [];
gdjs.MenuCode.GDNewObject4Objects2= [];
gdjs.MenuCode.GDNewObject9Objects1= [];
gdjs.MenuCode.GDNewObject9Objects2= [];
gdjs.MenuCode.GDNewObject10Objects1= [];
gdjs.MenuCode.GDNewObject10Objects2= [];
gdjs.MenuCode.GDNewObject11Objects1= [];
gdjs.MenuCode.GDNewObject11Objects2= [];
gdjs.MenuCode.GDNewObject12Objects1= [];
gdjs.MenuCode.GDNewObject12Objects2= [];
gdjs.MenuCode.GDMusicToggleObjects1= [];
gdjs.MenuCode.GDMusicToggleObjects2= [];
gdjs.MenuCode.GDInstructionsTitleObjects1= [];
gdjs.MenuCode.GDInstructionsTitleObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8743180);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setY(310);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboardsObjects1Objects = Hashtable.newFrom({"Leaderboards": gdjs.MenuCode.GDLeaderboardsObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNAObjects1Objects = Hashtable.newFrom({"NA": gdjs.MenuCode.GDNAObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboardsObjects1Objects = Hashtable.newFrom({"Leaderboards": gdjs.MenuCode.GDLeaderboardsObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMusicToggleObjects1Objects = Hashtable.newFrom({"MusicToggle": gdjs.MenuCode.GDMusicToggleObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8747652);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).mul(-(1));
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.MenuCode.GDQuitObjects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.MenuCode.GDQuitObjects1});gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8741860);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setY(307);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setY(290);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboards"), gdjs.MenuCode.GDLeaderboardsObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboardsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8744644);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDNAObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNAObjects1Objects, 420, 250, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboards"), gdjs.MenuCode.GDLeaderboardsObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboardsObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NA"), gdjs.MenuCode.GDNAObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNAObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNAObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicToggle"), gdjs.MenuCode.GDMusicToggleObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMusicToggleObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicToggle"), gdjs.MenuCode.GDMusicToggleObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMusicToggleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicToggleObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == -(1);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicToggle"), gdjs.MenuCode.GDMusicToggleObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMusicToggleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicToggleObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDQuitObjects1[i].setColor("214;214;214");
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDQuitObjects1[i].setColor("25;25;25");
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObject2Objects1.length = 0;
gdjs.MenuCode.GDNewObject2Objects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDScreenObjects1.length = 0;
gdjs.MenuCode.GDScreenObjects2.length = 0;
gdjs.MenuCode.GDDevTextObjects1.length = 0;
gdjs.MenuCode.GDDevTextObjects2.length = 0;
gdjs.MenuCode.GDInstructionsObjects1.length = 0;
gdjs.MenuCode.GDInstructionsObjects2.length = 0;
gdjs.MenuCode.GDInstructions2Objects1.length = 0;
gdjs.MenuCode.GDInstructions2Objects2.length = 0;
gdjs.MenuCode.GDNewObject5Objects1.length = 0;
gdjs.MenuCode.GDNewObject5Objects2.length = 0;
gdjs.MenuCode.GDNewObject6Objects1.length = 0;
gdjs.MenuCode.GDNewObject6Objects2.length = 0;
gdjs.MenuCode.GDNewObject7Objects1.length = 0;
gdjs.MenuCode.GDNewObject7Objects2.length = 0;
gdjs.MenuCode.GDNewObject8Objects1.length = 0;
gdjs.MenuCode.GDNewObject8Objects2.length = 0;
gdjs.MenuCode.GDLeaderboardsObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardsObjects2.length = 0;
gdjs.MenuCode.GDNAObjects1.length = 0;
gdjs.MenuCode.GDNAObjects2.length = 0;
gdjs.MenuCode.GDSoundObjects1.length = 0;
gdjs.MenuCode.GDSoundObjects2.length = 0;
gdjs.MenuCode.GDNewObject3Objects1.length = 0;
gdjs.MenuCode.GDNewObject3Objects2.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDNewObject4Objects1.length = 0;
gdjs.MenuCode.GDNewObject4Objects2.length = 0;
gdjs.MenuCode.GDNewObject9Objects1.length = 0;
gdjs.MenuCode.GDNewObject9Objects2.length = 0;
gdjs.MenuCode.GDNewObject10Objects1.length = 0;
gdjs.MenuCode.GDNewObject10Objects2.length = 0;
gdjs.MenuCode.GDNewObject11Objects1.length = 0;
gdjs.MenuCode.GDNewObject11Objects2.length = 0;
gdjs.MenuCode.GDNewObject12Objects1.length = 0;
gdjs.MenuCode.GDNewObject12Objects2.length = 0;
gdjs.MenuCode.GDMusicToggleObjects1.length = 0;
gdjs.MenuCode.GDMusicToggleObjects2.length = 0;
gdjs.MenuCode.GDInstructionsTitleObjects1.length = 0;
gdjs.MenuCode.GDInstructionsTitleObjects2.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
