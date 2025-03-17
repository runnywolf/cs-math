import{_ as p,e as s,c as e,o as i,g as r,i as l,a as o,F as x}from"./index-CHE3jmAR.js";const g={};function u(f,t){const n=s("vl");return i(),e(x,null,[t[0]||(t[0]=r(" 遞迴關係式為 ")),l(n,{exp:"a_n + a_{n-1} - 6a_{n-2} = 0"}),t[1]||(t[1]=o("br",null,null,-1)),l(n,{exp:"\\Rightarrow"}),t[2]||(t[2]=r(" 特徵方程式為 ")),l(n,{exp:"\\lambda^2 + \\lambda - 6 = 0"}),t[3]||(t[3]=o("br",null,null,-1)),l(n,{exp:"\\Rightarrow"}),t[4]||(t[4]=r(" 特徵值 ")),l(n,{exp:"\\lambda = -3, 2"}),t[5]||(t[5]=o("br",null,null,-1)),l(n,{exp:"\\Rightarrow"}),t[6]||(t[6]=r(" 設一般式為 ")),l(n,{exp:"a_n = h_1(-3)^n + h_2 2^n"}),t[7]||(t[7]=o("br",null,null,-1)),t[8]||(t[8]=o("br",null,null,-1)),t[9]||(t[9]=r(" 將 ")),l(n,{exp:"n = 0, 1"}),t[10]||(t[10]=r(" 代入一般式，並包含初始條件： ")),l(n,{c:"",exp:`
		\\left\\{
		\\begin{align*}
			a_0 &= h_1 + h_2      &= A \\\\
			a_1 &= -3 h_1 + 2 h_2 &= B
		\\end{align*}
		\\right.
	`}),t[11]||(t[11]=r(" 解 ")),l(n,{exp:"h_1, h_2"}),t[12]||(t[12]=r(" 聯立，得到 ")),l(n,{c:"",exp:`
		\\left\\{
		\\begin{align*}
			h_1 &= \\tfrac{1}{5} (2A-B) \\\\
			h_2 &= \\tfrac{1}{5} (3A+B)
		\\end{align*}
		\\right.
	`}),t[13]||(t[13]=r(" 將 ")),l(n,{exp:"h_1, h_2"}),t[14]||(t[14]=r(" 代回一般式： ")),l(n,{c:"",exp:`
		\\begin{split}
			a_n &= \\tfrac{1}{5} (2A-B) (-3)^n + \\tfrac{1}{5} (3A+B) 2^n \\\\
					&= \\tfrac{1}{5} [ (-3)^n(2A-B) + 2^n(3A+B) ]
		\\end{split}
	`}),t[15]||(t[15]=r(" Ans: (A) "))],64)}const d=p(g,[["render",u]]);export{d as default};
