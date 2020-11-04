const dialogflowConfig = require("./dialogflow.json");
const googleAuth = require("google-oauth-jwt");
const Axios = require("axios")

async function getToken() {
    googleAuth.authenticate({
        email: dialogflowConfig.client_email,
        key: dialogflowConfig.private_key,
        scopes: ["https://www.googleapis.com/auth/dialogflow"],
    },((err,token)=>{console.log(token);
        console.log(err)
        window.localStorage.setItem('googleToken',token)
    }))
}   

 function dialogflow(str,token){
    let config = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: ` Bearer ${token}`,
        }
    }
    let url = `https://dialogflow.googleapis.com/v2/projects/test-jhcu/agent/sessions/123456:detectIntent`
    let data = {
        "queryInput": {
            "text": {
                "text": str,
                "language_code": "en-US"
            }
        },
        queryParams: { timeZone: "ko" }
    }
    return Axios.post(url, data, config)
        .then(res => {
            let text = res.data.queryResult.fulfillmentText
            if (text === 'false') {
                return '주문을 다시 해 주십시오'
            }
            else {
                console.log(text)
                return text
            }
        }).catch(err => {
            console.dir(err)
            return 'err'
        })
        
}
// 화이팅....


export { getToken,dialogflow }