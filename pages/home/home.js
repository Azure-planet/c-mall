// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";

Page({


    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],


        background: [],
        indicatorDots: true,//指示点
        autoplay: true,//自动播放
        interval: 2000,//切换间隔
        duration: 500,//切换持续事件
        circular: true,//持续切换
        indicatorColor: '#157658'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        await this.initAllData()
    },

    async initAllData() {

        //请求首页第一个元素
        const themeA = await Theme.getHomeLocationA()
        //请求首页第二个元素
        const bannerB = await Banner.getHomeLocationB()

        //请求第三个元素 (六宫格)
        const grid = await Category.getGridCategory()

        //设置数据
        this.setData({
            themeA: themeA[0],
            bannerB: bannerB,
            grid: grid
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})