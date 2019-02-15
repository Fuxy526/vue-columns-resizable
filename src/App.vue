<template>
  <div id="app">
    <div class="container">
      <div>Default</div>
      <table border="1" class="table" v-columns-resizable>
        <thead>
          <tr>
            <th width="50%">name</th>
            <th width="25%">age</th>
            <th width="25%">gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>20</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Emma</td>
            <td>18</td>
            <td>female</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>21</td>
            <td>male</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container">
      <div>Resize on thead</div>
      <table border="1" class="table">
        <thead v-columns-resizable>
          <tr>
            <th width="50%">name</th>
            <th width="25%">age</th>
            <th width="25%">gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>20</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Emma</td>
            <td>18</td>
            <td>female</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>21</td>
            <td>male</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}
</style>
