<script>

</script>
<template>
  <div id="mainWrap">
    <h1 class="module-title1">{{ $t('Company.Title') }}</h1>
    <div class="message">
    </div>
    <table class="module-table1">
      <tbody>
        <tr>
          <th>{{ $t('Company.Message') }}</th>
          <td>
          {{ $t('Company.MessageContent.Line1') }} <br>
          {{ $t('Company.MessageContent.Line2') }} 
          {{ $t('Company.MessageContent.Line3') }} 
          {{ $t('Company.MessageContent.Line4') }} <br>
          {{ $t('Company.MessageContent.Line5') }} <br>
          {{ $t('Company.MessageContent.Line6') }} <br>
          {{ $t('Company.MessageContent.Line7') }} <br>
          {{ $t('Company.MessageContent.Line8') }}
          </td>
        </tr>
        <tr>
          <th>{{ $t('Company.CompanyNameTitle') }}</th>
          <td>{{ $t('Company.CompanyName') }}</td>
        </tr>
        <tr>
          <th>{{ $t('Company.LocationTitle') }}</th>
          <td>{{ $t('Company.Location') }}
          </td>
        </tr>
        <tr>
          <th>{{ $t('Company.TelephoneTitle') }}</th>
          <td>{{ $t('Company.Telephone') }}</td>
        </tr>
        <tr>
          <th>{{ $t('Company.EstablishmentTitle') }}</th>
          <td>{{ $t('Company.Establishment') }}</td>
        </tr>
        <tr>
          <th>{{ $t('Company.CapitalTitle') }}</th>
          <td>{{ $t('Company.Capital') }}</td>
        </tr>
        <tr>
          <th>{{ $t('Company.OfficersTitle') }}</th>
          <td>{{ $t('Company.Officers') }}</td>
        </tr>
        <tr>
          <th>{{ $t('Company.BusinessContentTitle') }}</th>
          <td>
           {{ $t('Company.BusinessContent.Line1') }} <br>
           {{ $t('Company.BusinessContent.Line2') }} <br>
           {{ $t('Company.BusinessContent.Line3') }} <br>
           {{ $t('Company.BusinessContent.Line4') }} <br>
           {{ $t('Company.BusinessContent.Line5') }} 
          </td>
        </tr>
        <tr>
          <th>{{ $t('Company.MajorBanksTitle') }}</th>
          <td>{{ $t('Company.MajorBanks') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
#mainWrap {
  min-width: 1390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color:pink; */
}

.module-title1 {
  margin: 36px 0;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  box-sizing: border-box;
  font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "MS P明朝", "MS 明朝", serif;
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
</style>