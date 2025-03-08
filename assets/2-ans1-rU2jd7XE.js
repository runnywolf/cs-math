import{_ as o,r as p,c as x,o as e,b as t,k as r,i as s,F as f}from"./index-CQCvOr_e.js";const d={};function i(m,n){const l=p("vl");return e(),x(f,null,[n[0]||(n[0]=t(" 遞迴關係式為 ")),r(l,{exp:"a_n + a_{n-1} - 6a_{n-2} = 0"}),n[1]||(n[1]=t("，可知特徵方程式為 ")),r(l,{exp:"\\lambda^2 + \\lambda - 6 = 0"}),n[2]||(n[2]=t("，")),n[3]||(n[3]=s("br",null,null,-1)),n[4]||(n[4]=t(" 求得特徵根 ")),r(l,{exp:"\\lambda = -3, 2"}),n[5]||(n[5]=t("，一般式為 ")),r(l,{exp:"a_n = h_1(-3)^n + h_2 2^n"}),n[6]||(n[6]=t("。")),n[7]||(n[7]=s("br",null,null,-1)),n[8]||(n[8]=t(" 將 ")),r(l,{exp:"n = 0, 1"}),n[9]||(n[9]=t(" 代入一般式，並包含初始條件： ")),r(l,{c:"",exp:`
		\\left\\{
		\\begin{align*}
			a_0 &= h_1 + h_2      &= A \\\\
			a_1 &= -3 h_1 + 2 h_2 &= B
		\\end{align*}
		\\right.
	`}),n[10]||(n[10]=t(" 解 ")),r(l,{exp:"h_1, h_2"}),n[11]||(n[11]=t(" 聯立，得到 ")),r(l,{exp:"h_1 = \\frac{1}{5} (2A-B)"}),n[12]||(n[12]=t(", ")),r(l,{exp:"h_2 = \\frac{1}{5} (3A+B)"}),n[13]||(n[13]=s("br",null,null,-1)),n[14]||(n[14]=t(" 將 ")),r(l,{exp:"h_1, h_2"}),n[15]||(n[15]=t(" 代回一般式： ")),r(l,{c:"",exp:`
		\\begin{split}
			a_n &= \\tfrac{1}{5} (2A-B) (-3)^n + \\tfrac{1}{5} (3A+B) 2^n \\\\
					&= \\tfrac{1}{5} [ (-3)^n(2A-B) + 2^n(3A+B) ]
		\\end{split}
	`}),n[16]||(n[16]=t(" Ans: (A) "))],64)}const A=o(d,[["render",i]]);export{A as default};
