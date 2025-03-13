import{_ as b,r as i,c as p,o,k as x,i as r,b as l,F as m}from"./index-pBVmNx-m.js";const s={};function a(u,t){const n=i("vl");return o(),p(m,null,[x(n,{exp:"f(x) \\in P_2(\\R)"}),t[0]||(t[0]=r("br",null,null,-1)),x(n,{exp:"\\Rightarrow"}),t[1]||(t[1]=l(" 設 ")),x(n,{exp:"f(x) = a_0 + a_1 x + a_2 x^2"}),t[2]||(t[2]=l(" 對應到 ")),x(n,{exp:"\\!\\begin{bmatrix} a_0 \\\\ a_1 \\\\ a_2 \\end{bmatrix}\\! \\in \\R^3"}),t[3]||(t[3]=r("br",null,null,-1)),t[4]||(t[4]=r("br",null,null,-1)),t[5]||(t[5]=l(" 化簡線性變換 ")),x(n,{exp:"T"}),t[6]||(t[6]=l("： ")),x(n,{c:"",exp:`
		\\begin{split}
			T(f(x)) &= f''(x) + 2f'(x) - f(x) \\\\
			        &= 2a_2 + 2(a_1 + 2a_2 x) - (a_0 + a_1 x + a_2 x^2) \\\\
							&= (-a_0 + 2a_1 + 2a_2) + (-a_1 + 4a_2)x + (-a_2)x^2
		\\end{split}
	`}),t[7]||(t[7]=l(" 將 ")),x(n,{exp:"f(x)"}),t[8]||(t[8]=l(" 對應到 ")),x(n,{exp:"\\R^3"}),t[9]||(t[9]=l("： ")),x(n,{c:"",exp:`
		M \\!\\begin{bmatrix} a_0 \\\\ a_1 \\\\ a_2 \\end{bmatrix}\\!
		= \\!\\begin{bmatrix} -a_0 & +2a_1 & +2a_2 \\\\ & -a_1 & +4a_2 \\\\ & & -a_2 \\end{bmatrix}\\!
		= \\!\\begin{bmatrix} -1 & 2 & 2 \\\\ 0 & -1 & 4 \\\\ 0 & 0 & -1 \\end{bmatrix}\\!
		  \\!\\begin{bmatrix} a_0 \\\\ a_1 \\\\ a_2 \\end{bmatrix}\\!
	`}),x(n,{exp:"\\Rightarrow ~ M = \\!\\begin{bmatrix} -1 & 2 & 2 \\\\ 0 & -1 & 4 \\\\ 0 & 0 & -1 \\end{bmatrix}\\!"}),t[10]||(t[10]=r("br",null,null,-1)),t[11]||(t[11]=r("br",null,null,-1)),t[12]||(t[12]=l(" ※ ")),x(n,{exp:"M^{-1} + 2I"}),t[13]||(t[13]=l(" 的行列式等於所有特徵值之乘積。")),t[14]||(t[14]=r("br",null,null,-1)),x(n,{exp:"M"}),t[15]||(t[15]=l(" 為上三角矩陣，特徵值為對角線元素：")),t[16]||(t[16]=r("br",null,null,-1)),x(n,{c:"",exp:"\\lambda(M) = \\{-1, -1, -1\\}"}),t[17]||(t[17]=l(" 而 ")),x(n,{exp:"M^{-1} + 2I"}),t[18]||(t[18]=l(" 的特徵值為 ")),x(n,{exp:"\\lambda(M)^{-1} + 2"}),t[19]||(t[19]=l("：")),t[20]||(t[20]=r("br",null,null,-1)),x(n,{c:"",exp:"\\lambda(M^{-1} + 2I) = \\{1, 1, 1\\}"}),t[21]||(t[21]=l(" 則 ")),x(n,{exp:"M^{-1} + 2I"}),t[22]||(t[22]=l(" 的行列式 ")),x(n,{c:"",exp:"\\text{det}(M^{-1} + 2I) = 1 \\cdot 1 \\cdot 1 = 1"}),t[23]||(t[23]=l(" Ans: (B) "))],64)}const e=b(s,[["render",a]]);export{e as default};
