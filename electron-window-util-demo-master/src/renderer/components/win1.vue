<template>
  <div class="win_box">
    窗口名称：{{parameter}}<br>
    接收到的消息：
    <div style="height: calc(100% - 80px);border: solid 1px #ccc" v-html="receMSG">

    </div>
    <div style="text-align: right">
      <input type="text" v-model="msg">
      <button @click="sendMsg('win2')">发送到win2</button>
      <button @click="sendMsg()">发送到所有窗口</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "win1",
    data() {
      return {
        parameter: '',
        msg: '',
        receMSG: '',
      }
    },
    mounted() {
      this.parameter = this.$Win.parameter;
      this.$Win.on('_sendMsg', (data, winInfo) => {
        let msg = data;
        if (winInfo.name) {
          msg += `   ----来自 name=【${winInfo.name}】`;
        } else if (winInfo.id) {
          msg += `   ----来自 id=【${winInfo.id}】`;
        }
        msg += '<br>';
        this.receMSG += msg;
      })

      // let fun = (data, winInfo) => {
      //   let msg = data;
      //   if (winInfo.name) {
      //     msg += `   ----来自 name=【${winInfo.name}】`;
      //   } else if (winInfo.id) {
      //     msg += `   ----来自 id=【${winInfo.id}】`;
      //   }
      //   msg += '=======<br>';
      //   this.receMSG += msg;
      //   this.$Win.removeListener('_sendMsg', fun);
      // };
      // this.$Win.on('_sendMsg', fun);
    },
    methods: {
      sendMsg(winName) {
        let res = this.$Win.send('_sendMsg', {
          id: '',
          name: winName,
          data: this.msg,
        });
        console.log('发送结果：', res);
      }
    }
  }
</script>

<style scoped lang="scss">
  .win_box {
    height: 100%;
    width: 100%;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
  }
</style>
