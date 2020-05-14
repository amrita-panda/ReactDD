import $ from 'jquery';
import axios from 'axios';


export function ajaxpost(url,form){
   $.ajax({
    url: url,
    dataType: 'json',
    type: 'POST',
    data: form,
    success: function (response) {
        console.log(response)
        alert(response.data)
    },
    error: function (xhr, status, err) {
        alert("errr",err);
    }

})
}
export  async function axisuserlistGet(url)
{
 let res= await axios.get(url);
 console.log(res.data);
 return res.data;
}
export async function signin(url,form){
    console.log(url);
  const response = await axios.post(url,form)
  return response
}
