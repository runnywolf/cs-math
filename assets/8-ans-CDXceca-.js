import{_ as r,r as p,c as o,o as m,b as n,l as s,j as l,F as x}from"./index-BK9cxvng.js";const b={};function d(u,t){const i=p("vl");return m(),o(x,null,[t[0]||(t[0]=n(" 跡的定義：")),s(i,{exp:"\\text{tr}(A) = \\sum\\limits_{i=1}^n A_{ii}"}),t[1]||(t[1]=l("br",null,null,-1)),t[2]||(t[2]=n(" 根據 ")),s(i,{c:"",exp:`
		\\begin{split}
			\\text{tr}(A+B) &= \\sum\\limits_{i=1}^n (A+B)_{ii} \\\\
				&= \\sum\\limits_{i=1}^n (A_{ii} + B_{ii}) \\\\
				&= \\sum\\limits_{i=1}^n A_{ii} + \\sum\\limits_{i=1}^n B_{ii} \\\\
				&= \\text{tr}(A) + \\text{tr}(B)
		\\end{split}
	`}),t[3]||(t[3]=n(" 分解選項 (A) 的式子： ")),s(i,{c:"",exp:`
		\\begin{split}
			\\text{tr}((A+B)C) &= \\text{tr}(AC+BC) \\\\
				&= \\text{tr}(AC) + \\text{tr}(BC)
		\\end{split}
	`}),t[4]||(t[4]=l("div",{class:"ts-wrap is-compact"},[l("span",null,"(A)"),l("span",{class:"ts-icon is-check-icon is-big option-true-color"})],-1)),t[5]||(t[5]=l("div",{class:"ts-divider is-section"},null,-1)),t[6]||(t[6]=n(" 反例： ")),s(i,{c:"",exp:`
		\\left\\{
		\\begin{alignat*}{1}
			&\\text{tr}(I_n I_n) = \\text{tr}(I_n) = n \\\\
			&\\text{tr}(I_n) \\text{tr}(I_n) = n \\cdot n = n^2
		\\end{alignat*}
		\\right.
	`}),t[7]||(t[7]=n(" ※ ")),s(i,{exp:"\\text{det}(AB) = \\text{det}(A) \\text{det}(B)"}),t[8]||(t[8]=l("div",{class:"ts-wrap is-compact"},[l("span",null,"(B)"),l("span",{class:"ts-icon is-xmark-icon is-big option-false-color"})],-1)),t[9]||(t[9]=l("div",{class:"ts-divider is-section"},null,-1)),t[10]||(t[10]=n(" 根據矩陣乘法的定義 ")),s(i,{exp:"(AB)_{ij} = \\sum\\limits_{k=1}^n A_{ik} B_{kj}"}),t[11]||(t[11]=n("： ")),s(i,{c:"",exp:`
		\\begin{split}
			\\text{tr}(AB) &= \\sum\\limits_{i=1}^n (AB)_{ii} \\\\
				&= \\sum\\limits_{i=1}^n \\sum\\limits_{k=1}^n A_{ik} B_{ki} \\\\
				&= \\sum\\limits_{k=1}^n \\sum\\limits_{i=1}^n B_{ki} A_{ik} \\\\
				&= \\sum\\limits_{k=1}^n (BA)_{kk} \\\\
				&= \\text{tr}(BA)
		\\end{split}
	`}),t[12]||(t[12]=l("div",{class:"ts-wrap is-compact"},[l("span",null,"(C)"),l("span",{class:"ts-icon is-check-icon is-big option-true-color"})],-1)),t[13]||(t[13]=l("div",{class:"ts-divider is-section"},null,-1)),t[14]||(t[14]=n(" 求特徵多項式： ")),s(i,{c:"",exp:`
		\\begin{split}
			p(t) &= \\!\\begin{vmatrix} a-t & b+c \\\\ b-c & -a-t \\end{vmatrix}\\! \\\\
					 &= -(a-t)(a+t) - (b-c)(b+c) \\\\
					 &= -(a^2 - t^2) - (b^2 - c^2) \\\\
					 &= t^2 - a^2 - b^2 + c^2
		\\end{split}
	`}),s(i,{exp:"p(\\lambda) = \\lambda^2 - a^2 -b^2 + c^2 = 0"}),t[15]||(t[15]=l("br",null,null,-1)),s(i,{exp:"\\Rightarrow ~ \\lambda = \\pm\\sqrt{a^2 + b^2 - c^2}"}),t[16]||(t[16]=l("br",null,null,-1)),s(i,{exp:"\\Rightarrow"}),t[17]||(t[17]=n(" 若 ")),s(i,{exp:"a^2 + b^2 - c^2 \\ge 0"}),t[18]||(t[18]=n(" 則 ")),s(i,{exp:"\\lambda"}),t[19]||(t[19]=n(" 為實數")),t[20]||(t[20]=l("br",null,null,-1)),s(i,{exp:"\\Rightarrow"}),t[21]||(t[21]=n(" 若 ")),s(i,{exp:"a^2 + b^2 \\ge c^2"}),t[22]||(t[22]=n(" 則 ")),s(i,{exp:"\\!\\begin{bmatrix} a & b+c \\\\ b-c & -a \\end{bmatrix}\\!"}),t[23]||(t[23]=n(" 有實數特徵值 ")),t[24]||(t[24]=l("div",{class:"ts-wrap is-compact"},[l("span",null,"(D)"),l("span",{class:"ts-icon is-check-icon is-big option-true-color"})],-1)),t[25]||(t[25]=l("div",{class:"ts-divider is-section"},null,-1)),t[26]||(t[26]=n(" 由於 ")),s(i,{exp:"A^3 = I"}),t[27]||(t[27]=n("，")),s(i,{exp:"A"}),t[28]||(t[28]=n(" 的特徵值 ")),s(i,{exp:"\\lambda"}),t[29]||(t[29]=n(" 滿足 ")),s(i,{exp:"\\lambda^3 = 1"}),t[30]||(t[30]=n("。")),t[31]||(t[31]=l("br",null,null,-1)),t[32]||(t[32]=n(" 而 ")),s(i,{exp:"\\lambda"}),t[33]||(t[33]=n(" 為複平面上的三次單位根： ")),s(i,{c:"",exp:`
		\\lambda \\in \\{ 1, \\omega, \\omega^2 \\} ~,~
		\\omega = e^{2 \\pi i / 3} = \\frac{-1 + \\sqrt{3}}{2}
	`}),t[34]||(t[34]=n(" 存在反例 ")),s(i,{exp:"A = \\!\\begin{bmatrix} 1 & 0 \\\\ 0 & \\omega \\end{bmatrix}\\!"}),t[35]||(t[35]=n(" 滿足 ")),s(i,{exp:"A \\neq I"}),t[36]||(t[36]=n(" 和 ")),s(i,{exp:"A^3 = I"}),t[37]||(t[37]=n("，")),t[38]||(t[38]=l("br",null,null,-1)),t[39]||(t[39]=n(" 但 ")),s(i,{exp:"\\text{tr}(A) = 1 + \\omega \\neq 1"}),t[40]||(t[40]=n("。 ")),t[41]||(t[41]=l("div",{class:"ts-wrap is-compact"},[l("span",null,"(E)"),l("span",{class:"ts-icon is-xmark-icon is-big option-false-color"})],-1))],64)}const A=r(b,[["render",d]]);export{A as default};
