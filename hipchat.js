var hipchatClient = require('../hipchat_client')('hipchat api key'); // api key for group admin (https://www.hipchat.com/docs/api)

function hipChatNotify(service, msgColor, message){

    hipchatClient.apiCall('POST', '/rooms/message', {
      room_id: '125945',
      from: '',  // Set this to any name you want, does not have to be a valid Hipchat account name
      color:msgColor,
      message: '@all '+service+' '+message+'',
      message_format: 'text'
      }, function (err, resp) {
        if (!err) {
        console.log(resp);
        }
      });

}

module.exports = hipChatNotify;