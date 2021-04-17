gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDTitleObjects1= [];
gdjs.LeaderboardCode.GDTitleObjects2= [];
gdjs.LeaderboardCode.GDPosition10Objects1= [];
gdjs.LeaderboardCode.GDPosition10Objects2= [];
gdjs.LeaderboardCode.GDPosition9Objects1= [];
gdjs.LeaderboardCode.GDPosition9Objects2= [];
gdjs.LeaderboardCode.GDPosition8Objects1= [];
gdjs.LeaderboardCode.GDPosition8Objects2= [];
gdjs.LeaderboardCode.GDPosition7Objects1= [];
gdjs.LeaderboardCode.GDPosition7Objects2= [];
gdjs.LeaderboardCode.GDPosition6Objects1= [];
gdjs.LeaderboardCode.GDPosition6Objects2= [];
gdjs.LeaderboardCode.GDPosition5Objects1= [];
gdjs.LeaderboardCode.GDPosition5Objects2= [];
gdjs.LeaderboardCode.GDPosition4Objects1= [];
gdjs.LeaderboardCode.GDPosition4Objects2= [];
gdjs.LeaderboardCode.GDPosition3Objects1= [];
gdjs.LeaderboardCode.GDPosition3Objects2= [];
gdjs.LeaderboardCode.GDPosition2Objects1= [];
gdjs.LeaderboardCode.GDPosition2Objects2= [];
gdjs.LeaderboardCode.GDPosition1Objects1= [];
gdjs.LeaderboardCode.GDPosition1Objects2= [];
gdjs.LeaderboardCode.GDTitle2Objects1= [];
gdjs.LeaderboardCode.GDTitle2Objects2= [];
gdjs.LeaderboardCode.GDLineObjects1= [];
gdjs.LeaderboardCode.GDLineObjects2= [];
gdjs.LeaderboardCode.GDPlayer10Objects1= [];
gdjs.LeaderboardCode.GDPlayer10Objects2= [];
gdjs.LeaderboardCode.GDPlayer9Objects1= [];
gdjs.LeaderboardCode.GDPlayer9Objects2= [];
gdjs.LeaderboardCode.GDPlayer8Objects1= [];
gdjs.LeaderboardCode.GDPlayer8Objects2= [];
gdjs.LeaderboardCode.GDPlayer7Objects1= [];
gdjs.LeaderboardCode.GDPlayer7Objects2= [];
gdjs.LeaderboardCode.GDPlayer6Objects1= [];
gdjs.LeaderboardCode.GDPlayer6Objects2= [];
gdjs.LeaderboardCode.GDPlayer5Objects1= [];
gdjs.LeaderboardCode.GDPlayer5Objects2= [];
gdjs.LeaderboardCode.GDPlayer4Objects1= [];
gdjs.LeaderboardCode.GDPlayer4Objects2= [];
gdjs.LeaderboardCode.GDPlayer3Objects1= [];
gdjs.LeaderboardCode.GDPlayer3Objects2= [];
gdjs.LeaderboardCode.GDPlayer2Objects1= [];
gdjs.LeaderboardCode.GDPlayer2Objects2= [];
gdjs.LeaderboardCode.GDPlayer1Objects1= [];
gdjs.LeaderboardCode.GDPlayer1Objects2= [];
gdjs.LeaderboardCode.GDScore10Objects1= [];
gdjs.LeaderboardCode.GDScore10Objects2= [];
gdjs.LeaderboardCode.GDScore9Objects1= [];
gdjs.LeaderboardCode.GDScore9Objects2= [];
gdjs.LeaderboardCode.GDScore8Objects1= [];
gdjs.LeaderboardCode.GDScore8Objects2= [];
gdjs.LeaderboardCode.GDScore7Objects1= [];
gdjs.LeaderboardCode.GDScore7Objects2= [];
gdjs.LeaderboardCode.GDScore6Objects1= [];
gdjs.LeaderboardCode.GDScore6Objects2= [];
gdjs.LeaderboardCode.GDScore5Objects1= [];
gdjs.LeaderboardCode.GDScore5Objects2= [];
gdjs.LeaderboardCode.GDScore4Objects1= [];
gdjs.LeaderboardCode.GDScore4Objects2= [];
gdjs.LeaderboardCode.GDScore3Objects1= [];
gdjs.LeaderboardCode.GDScore3Objects2= [];
gdjs.LeaderboardCode.GDScore2Objects1= [];
gdjs.LeaderboardCode.GDScore2Objects2= [];
gdjs.LeaderboardCode.GDScore1Objects1= [];
gdjs.LeaderboardCode.GDScore1Objects2= [];
gdjs.LeaderboardCode.GDBackButtonObjects1= [];
gdjs.LeaderboardCode.GDBackButtonObjects2= [];

gdjs.LeaderboardCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.LeaderboardCode.GDBackButtonObjects1});gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LeaderboardCode.GDBackButtonObjects1);

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.getField("highscores", "1", "score", runtimeScene.getVariables().get("score1"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "1", "name", runtimeScene.getVariables().get("player1"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "2", "score", runtimeScene.getVariables().get("score2"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "2", "name", runtimeScene.getVariables().get("player2"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "3", "name", runtimeScene.getVariables().get("player3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "3", "score", runtimeScene.getVariables().get("score3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "5", "score", runtimeScene.getVariables().get("score5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "4", "name", runtimeScene.getVariables().get("player4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "4", "score", runtimeScene.getVariables().get("score4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "5", "name", runtimeScene.getVariables().get("player5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "6", "name", runtimeScene.getVariables().get("player6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "6", "score", runtimeScene.getVariables().get("score6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "7", "name", runtimeScene.getVariables().get("player7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "7", "score", runtimeScene.getVariables().get("score7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "8", "name", runtimeScene.getVariables().get("player8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "8", "score", runtimeScene.getVariables().get("score8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "9", "name", runtimeScene.getVariables().get("player9"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "9", "score", runtimeScene.getVariables().get("score9"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "10", "name", runtimeScene.getVariables().get("player10"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.getField("highscores", "10", "score", runtimeScene.getVariables().get("score10"), gdjs.VariablesContainer.badVariable);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.LeaderboardCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player10"), gdjs.LeaderboardCode.GDPlayer10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.LeaderboardCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player3"), gdjs.LeaderboardCode.GDPlayer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player4"), gdjs.LeaderboardCode.GDPlayer4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player5"), gdjs.LeaderboardCode.GDPlayer5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player6"), gdjs.LeaderboardCode.GDPlayer6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player7"), gdjs.LeaderboardCode.GDPlayer7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player8"), gdjs.LeaderboardCode.GDPlayer8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player9"), gdjs.LeaderboardCode.GDPlayer9Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score1"), gdjs.LeaderboardCode.GDScore1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score10"), gdjs.LeaderboardCode.GDScore10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.LeaderboardCode.GDScore2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score3"), gdjs.LeaderboardCode.GDScore3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score4"), gdjs.LeaderboardCode.GDScore4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score5"), gdjs.LeaderboardCode.GDScore5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score6"), gdjs.LeaderboardCode.GDScore6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score7"), gdjs.LeaderboardCode.GDScore7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score8"), gdjs.LeaderboardCode.GDScore8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score9"), gdjs.LeaderboardCode.GDScore9Objects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer10Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer10Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player10")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore10Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore10Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score10")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer9Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer9Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player9")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore9Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore9Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score9")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer8Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer8Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player8")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore8Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore8Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score8")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer7Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer7Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player7")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore7Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore7Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score7")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer6Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer6Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player6")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer5Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player5")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore6Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore6Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score6")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore5Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score5")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer4Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player4")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore4Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score4")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer3Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player3")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore3Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score3")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player2")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score2")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayer1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("player1")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore1Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score1")));
}
}}

}


{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDTitleObjects1.length = 0;
gdjs.LeaderboardCode.GDTitleObjects2.length = 0;
gdjs.LeaderboardCode.GDPosition10Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition10Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition9Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition9Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition8Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition8Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition7Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition7Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition6Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition6Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition5Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition5Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition4Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition4Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition3Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition3Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition2Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition2Objects2.length = 0;
gdjs.LeaderboardCode.GDPosition1Objects1.length = 0;
gdjs.LeaderboardCode.GDPosition1Objects2.length = 0;
gdjs.LeaderboardCode.GDTitle2Objects1.length = 0;
gdjs.LeaderboardCode.GDTitle2Objects2.length = 0;
gdjs.LeaderboardCode.GDLineObjects1.length = 0;
gdjs.LeaderboardCode.GDLineObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayer10Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer10Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer9Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer9Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer8Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer8Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer7Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer7Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer6Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer6Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer5Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer5Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer4Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer4Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer3Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer3Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer2Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer2Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayer1Objects1.length = 0;
gdjs.LeaderboardCode.GDPlayer1Objects2.length = 0;
gdjs.LeaderboardCode.GDScore10Objects1.length = 0;
gdjs.LeaderboardCode.GDScore10Objects2.length = 0;
gdjs.LeaderboardCode.GDScore9Objects1.length = 0;
gdjs.LeaderboardCode.GDScore9Objects2.length = 0;
gdjs.LeaderboardCode.GDScore8Objects1.length = 0;
gdjs.LeaderboardCode.GDScore8Objects2.length = 0;
gdjs.LeaderboardCode.GDScore7Objects1.length = 0;
gdjs.LeaderboardCode.GDScore7Objects2.length = 0;
gdjs.LeaderboardCode.GDScore6Objects1.length = 0;
gdjs.LeaderboardCode.GDScore6Objects2.length = 0;
gdjs.LeaderboardCode.GDScore5Objects1.length = 0;
gdjs.LeaderboardCode.GDScore5Objects2.length = 0;
gdjs.LeaderboardCode.GDScore4Objects1.length = 0;
gdjs.LeaderboardCode.GDScore4Objects2.length = 0;
gdjs.LeaderboardCode.GDScore3Objects1.length = 0;
gdjs.LeaderboardCode.GDScore3Objects2.length = 0;
gdjs.LeaderboardCode.GDScore2Objects1.length = 0;
gdjs.LeaderboardCode.GDScore2Objects2.length = 0;
gdjs.LeaderboardCode.GDScore1Objects1.length = 0;
gdjs.LeaderboardCode.GDScore1Objects2.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects2.length = 0;

gdjs.LeaderboardCode.eventsList1(runtimeScene);
return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
