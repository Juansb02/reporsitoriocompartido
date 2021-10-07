<template>
<div class="container">
<table id="navimg">
        <tr>
            <td style = "width: 30%;">
                <img v-bind:src="require('@/assets/banner1.jpg')" alt="" style="width: 100%;height: auto;padding-top: 0px;padding-bottom: 30px;">
            </td>
            <td style = "width: 1%;"></td>
            <td style = "width: 30%;">
                <img v-bind:src="require('@/assets/banner2.jpg')" alt="" style="width: 100%;height: auto;padding-top: 0px;padding-bottom: 30px;">
            </td>

            <td style = "width: 1%;"></td>
            <td style = "width: 30%;">
                <img v-bind:src="require('@/assets/banner3.jpg')" alt="" style="width: 100%;height: auto;padding-top: 0px;padding-bottom: 30px;">
            </td>
        </tr>
    </table>
</div>
</template>