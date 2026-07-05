var qrcode = new QRCode(document.getElementById("qrcode"), { width: 300, height: 300, text: ""});
$('input').on('input', function(e) {
  //e.preventDefault()
  qrcode.clear()
  let ssid = $('input[name=ssid]').val()
  let ssid_pwd = $('input[name=ssid_pwd]').val()
  let text = `{"p":"r3","cmd":"bind_wifi","data":{"ssid":"${btoa(ssid)}","ssid_pwd":"${btoa(ssid_pwd)}"}}`
  qrcode.makeCode(text);
  $('#text').text(`ssid: ${ssid}\npwd: ${ssid_pwd}\n${text}`)
})
