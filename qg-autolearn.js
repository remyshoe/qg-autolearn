//
// Auto learn of qg. 
//   Required Accessibility Service. For 1080x1920 screen resolution, without bottom navigator. 
// 1.0.7 
//
auto();
var read_news = false; // 
read_news = true;
var read_video = false; // 
read_video = true;

app.launchApp("学习强国");

var hometab = "home_bottom_tab_button_work";
id(hometab).click(); sleep(1000);

var onelinerowH = 245;
var twolinerowH = 323;
var threelinerowH = 401;
var start2rdrow = 1166;
var quanguopingtaiH = 698;
var toptabbot = 357;
//* Learn 6 articles.
if (read_news != false) {
    click("推荐"); sleep(2000);
    swipe(500,start2rdrow,500,toptabbot,500); sleep(1000);
    var idnews = null;
    var idolds = null;
    var i = 0; var max = 6;
    for (i=0; i<max; i++) {
        
        if (i == 3) {
            click("综合"); sleep(3000);
        }
        if (i < 3) {
            click(500,(300*i+500)); sleep(1000);
        } 
        else {
            var ij = i-3;
            click(500,(300*ij+500)); sleep(1000);
        }
        
        var idur = 0; // 4s x 33 = 2m12s
        while (idur < 33) {
            swipe(500,1200,500,500,1000); sleep(3000);
            idur++;
            toast(idur + " of 33");
        }
        
        if (i < 2) { // 
            click(850,1850); sleep(1000);
            click(980,1850); sleep(1000);
            click("分享到学习强国"); sleep(1000);
            click("创建新的聊天"); sleep(1000);
            back(); sleep(500);
            back(); sleep(500);
        }
        
        if (i == 0) {
            click(500,1850); sleep(1000);
            setText("愿祖国繁荣昌盛!");
            click("发布"); sleep(1000);
        }
        if (i == 2) {
            click(500,1850); sleep(1000);
            setText("不忘初心,为民服务.");
            click("发布"); sleep(1000);
        }
        
        back(); sleep(1500);
    } // for end
}
//*/

//* Learn 6 videos.
if (read_video != false) {
    click("电视台"); sleep(2000);
    click("联播频道"); sleep(2000);
    swipe(500,start2rdrow,500,toptabbot,500); sleep(1000);
    
    var idvids = null;
    var idolds = null;
    var i = 0; var max = 7;
    for (i=0; i<max; i++) {
        
        if (i == 3) {
            swipe(500,1641,500,357,1000); sleep(3000);
        }
        if (i < 3) {
            click(500,(300*i+500)); sleep(1000);
        } 
        else {
            var ij = i-3;
            click(500,(300*ij+500)); sleep(1000);
        }
        
        var idur = 0; // 4s x 48 = 3m12s
        while (idur < 48) {
            swipe(500,1200,500,500,1000); sleep(3000);
            idur++;
            if (idur%15 == 0) {
                click(500, 370); sleep(1000);
            }
            if (idur == 45) {
                click(800, 624); sleep(1000);
                click(800, 624); sleep(1000);
            }
            toast(idur + " of 48");
        }
        
        back(); sleep(1000);
    } // for end
}
//*/
