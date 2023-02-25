checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str){
    let strLower = str.toLowerCase();

    return strLower.includes('viagra') || strLower.includes('xxx');
}