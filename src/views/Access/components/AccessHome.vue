<script setup>

</script>
<template>
  <div id="mainWrap">	
   <h1 class="module-title1">{{ $t('Access.AccessTitle') }}</h1>
  <table class="module-table1">
  <tbody>
    <tr>
      <th>{{ $t('Access.Notice') }}</th>
      <td>{{ $t('Access.AddressChangeNotice') }}</td>
    </tr>
    <tr>
      <th>{{ $t('Access.Location') }}</th>
      <td>{{ $t('Access.AddressLine1') }}<br>
        {{ $t('Access.AddressLine2') }}
      </td>
    </tr>
  <tr>
    <th>{{ $t('Access.TelephoneTitle') }}</th>
    <td>{{ $t('Access.Telephone') }}</td>
  </tr>
  <tr>
      <th>{{ $t('Access.TrainAccess') }}</th>
        <td>{{ $t('Access.AccessLine1') }}<br>
          <a class="MapTitle" href="https://www.officenomura.jp/ybp/access/">{{ $t('Access.MapLink') }}</a><br>
          {{ $t('Access.AccessLine2') }}  
        </td> 
    </tr>
  </tbody>
  </table>
  <p><iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6500.064898165357!2d139.59960237301632!3d35.453991083933886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185bed56cd5b4f%3A0x9156ee24708c3163!2z5pel5pysLCDjgJIyNDAtMDAwNSDnpZ7lpYjlt53nnIzmqKrmtZzluILkv53lnJ_jgrHosLfljLrnpZ7miLjnlLog6YeO5p2R44K_44Ov44O844K644Kk44O844K544OI44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1487721877433" width="800" height="600" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
  
  
  </div>
  </template>
  
  <style>
  
   #mainWrap{
    min-width: 1390px;
     width :760px;
      margin: 0 auto;
      display: flex;
     flex-direction: column;
     align-items: center;
     /* background-color:pink; */
   }
   .module-title1{
    margin: 36px 0;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    box-sizing: border-box;
    /* font-family: "游明朝",YuMincho,"ヒラギノ明朝 ProN W3","Hiragino Mincho ProN","HG明朝E","MS P明朝","MS 明朝",serif; */
   }
   .module-table1 {
      width: 100%;
      border-top: 1px solid #e9e9e9;
      line-height: 1.8;
      border-spacing: 0;
      
   }
   .module-table1 th {
      width: 20%;
      min-width: 20%;
      padding: 15px 0;
      text-align: left;
      border-bottom: 1px solid #e9e9e9;
      vertical-align: top;
   }
   .module-table1 td {
      width: 80%;
      padding: 15px 0;
      border-bottom: 1px solid #e9e9e9;
  }
  .module-table1 td a{
  color: #000;
  }
  .module-table1 tbody .MapTitle{
    color: blue;
  }
  
  .module-table1 tbody .MapTitle:hover{
     text-decoration: none;
  }
  </style>