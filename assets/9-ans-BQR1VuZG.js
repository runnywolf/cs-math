import{_ as o,r as d,c as p,o as r,b as i,k as s,i as l,F as x}from"./index-ognQujHy.js";const e={},m={class:"ts-list is-unordered",style:{"padding-left":"6px","padding-bottom":"8px"}},q={class:"item"},f={class:"item"},u={class:"item"},b={class:"item"};function v(g,t){const n=d("vl");return r(),p(x,null,[t[8]||(t[8]=i(" 對稱矩陣排除對角線，上三角與下三角的元素是一一對應的，所以自由度會減少 ")),s(n,{exp:"1 + 2 + \\cdots + (n-1)"}),t[9]||(t[9]=i("： ")),s(n,{c:"",exp:`
		\\begin{split}
			d_S &= n^2 - \\sum\\limits_{i=1}^{n-1} i \\\\
					&= n^2 - \\frac{n(n-1)}{2} \\\\
					&= \\frac{n(n+1)}{2}
		\\end{split}
	`}),t[10]||(t[10]=l("br",null,null,-1)),t[11]||(t[11]=i(" 對角矩陣中，只有對角線元素不一定為 ")),s(n,{exp:"0"}),t[12]||(t[12]=i("，所以自由度為： ")),s(n,{c:"",exp:"d_D = n"}),t[13]||(t[13]=l("br",null,null,-1)),t[14]||(t[14]=i(" 令正交矩陣 ")),s(n,{exp:`
		Q = \\!\\begin{bmatrix} q_1 & q_2 & \\cdots & q_n \\end{bmatrix}\\! ~,~
		q_i \\in \\R^n
	`}),t[15]||(t[15]=i(" ，則：")),t[16]||(t[16]=l("br",null,null,-1)),l("div",m,[l("div",q,[s(n,{exp:"q_1"}),t[0]||(t[0]=i(" 的自由度為 ")),s(n,{exp:"n"})]),l("div",f,[s(n,{exp:"q_2"}),t[1]||(t[1]=i(" 為了與 ")),s(n,{exp:"q_1"}),t[2]||(t[2]=i(" 正交，自由度為 ")),s(n,{exp:"n-1"})]),l("div",u,[s(n,{exp:"q_3"}),t[3]||(t[3]=i(" 為了與 ")),s(n,{exp:"q_1, q_2"}),t[4]||(t[4]=i(" 正交，自由度為 ")),s(n,{exp:"n-2"})]),t[7]||(t[7]=l("div",{class:"item"},"  ... ",-1)),l("div",b,[s(n,{exp:"q_n"}),t[5]||(t[5]=i(" 為了與 ")),s(n,{exp:"q_1, q_2, \\,\\cdots, q_{n-1}"}),t[6]||(t[6]=i(" 正交，自由度為 ")),s(n,{exp:"n-(n-1) = 1"})])]),t[17]||(t[17]=i(" 並且 ")),s(n,{exp:"n"}),t[18]||(t[18]=i(" 個兩兩正交的向量需要單範化才能形成正交矩陣，自由度會減少 ")),s(n,{exp:"n"}),t[19]||(t[19]=i("： ")),s(n,{c:"",exp:`
		\\begin{split}
			d_Q &= \\sum\\limits_{i=1}^{n} i - n \\\\
					&= \\frac{n(n+1)}{2} - n \\\\
					&= \\frac{n(n-1)}{2}
		\\end{split}
	`}),t[20]||(t[20]=i(" 計算答案的值： ")),s(n,{c:"",exp:"d_S - d_D - d_Q = \\frac{n(n+1)}{2} - n - \\frac{n(n-1)}{2} = 0"}),t[21]||(t[21]=i(" Ans: (A) "))],64)}const A=o(e,[["render",v]]);export{A as default};
