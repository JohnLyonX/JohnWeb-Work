<template>
  <div class="Homeblodbody-content">
                <ul class="Homeblodbody-content-options">
                    <router-link to="/homeblog"><li>{{optiond}}</li></router-link>
                    <router-link to="/campusblog"><li>{{optiond2}}</li></router-link>
                    <router-link to="/channelblog"><li>{{optiond3}}</li></router-link>
                    <router-link to="/activity"><li>{{optiond4}}</li></router-link>
                </ul>
            </div>
</template>

<script>
export default {
    data() {
        return {
            optiond: "Vue.X博客",
            optiond2: "校园墙",
            optiond3: "校园频道",
            optiond4: "冬日计划",
        }
    }
}
</script>

<style scoped>
.Homeblodbody-content {
    display: inline-block;
    width: 100%;
}

.Homeblodbody-content-options li {
    display: inline-block;
    padding: 0 5px;
    margin: 15px 2% 15px 2%;
    border: 1px solid #e3e3e3;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    text-align: center;
    width: 80px;
    cursor: pointer;
    /*当鼠标放上面会变成手指 */
    user-select: none;
    font-weight: 500;
}
</style>