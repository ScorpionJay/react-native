const serviceUrl = '/' 

let Config = {}

if (process.env.NODE_ENV === 'production') {
  Config = {
  	initTab: 'home',
    inverstsAPI: 'http://onejay.top/json/invsert2.json',
    inverstAPI: 'http://onejay.top/json/invsert2.json'
  }
}else{
  Config = {
  	initTab: 'home',
    inverstsAPI: 'https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',
    inverstAPI: 'http://onejay.top/json/invsert2.json'
  }
}

export default Config