<template>
	<div class="ts-app-navbar navbar">
		<router-link :class="getClass(['Home'])" :to="{ name: 'Home' }">
			<div class="ts-icon is-house-icon"></div>
			<div class="label">首頁</div>
		</router-link>
		<router-link :class="getClass(['Notes'])" :to="{ name: 'Notes' }">
			<div class="ts-icon is-book-icon"></div>
			<div class="label">筆記</div>
		</router-link>
		<router-link :class="getClass(['ExamMenu', 'Exam'])" :to="{ name: 'ExamMenu' }">
			<div class="ts-icon is-file-icon"></div>
			<div class="label">歷屆試題</div>
		</router-link>
		<router-link :class="getClass(['Search'])" :to="{ name: 'Search' }">
			<div class="ts-icon is-magnifying-glass-icon"></div>
			<div class="label">搜尋題目</div>
		</router-link>
		<router-link :class="getClass(['Practice'])" :to="{ name: 'Practice' }">
			<div class="ts-icon is-pen-icon"></div>
			<div class="label">模擬室</div>
		</router-link>
		<router-link :class="getClass(['Other'])" :to="{ name: 'Other' }">
			<div class="ts-icon is-ellipsis-icon"></div>
			<div class="label">更多</div>
		</router-link>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute(); // 路由

const getClass = (selectNames) => { // 根據目前的路由名稱, 決定目前的導航列項目樣式
	for (const name of selectNames) if (route.name === name) return "item is-active"; // 讓當前路由名稱的項目看起來被選中
	return "item";
};
</script>

<style scoped>
.navbar {
	padding: 4px 0;
	background-color: #7af;
	display: flex; justify-content: center; /* 置中項目 */
}
.navbar > a {
	width: 80px; min-width: 80px; height: 60px;
	margin: 0 3px;
	white-space: nowrap; user-select: none; /* 禁止換行, 禁止被選取 */
	color: #eef;
}
.navbar > a:hover {
	background-color: #fff2; /* 如果滑鼠懸停在項目按鈕上, 稍微變白 */
	border-radius: 4px;
}
.navbar > a.is-active {
	background-color: #fff4; /* 如果項目按鈕被選中, 變更白 */
	border-radius: 4px;
	color: #fff;
}
</style>
