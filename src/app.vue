<template>
    <div id="app">
        <h2>欢迎使用项目模板</h2>
        <router-view/>
    </div>
</template>

<script>
    /*禁用eslint规则*/
    /*eslint-disable*/
    import axios from "axios";
    import api from "../mock/api.js";

    export default {
        async created() {
            let res = await axios.get(api.getUserInfo);
            console.log(res)
        }
    };
</script>

<style scoped lang="scss">
    /* stylelint-disable unit-whitelist 禁用一条规则*/
    /*
        stylelint-disable
    */
    $black: rgb(1, 2, 3);
    $yellow: yellow;
    h2 {
        color: $black;
        background-color: $yellow;
        transform: rotate(0deg);
    }
</style>