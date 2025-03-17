import{_ as b,e as i,c as u,o as m,i as l,g as r,a as x,F as p}from"./index-C13dIDNA.js";const o={};function s(d,t){const n=i("vl");return m(),u(p,null,[l(n,{exp:"A"}),t[0]||(t[0]=r(" 的 row sum 均為 1")),t[1]||(t[1]=x("br",null,null,-1)),l(n,{exp:"\\Rightarrow"}),t[2]||(t[2]=r(" 存在特徵向量 ")),l(n,{exp:"x_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\!"}),t[3]||(t[3]=r(" 使 ")),l(n,{exp:`
		Ax_1 = \\!\\def\\arraystretch{1.35}\\begin{bmatrix} \\frac{3}{5} & \\frac{2}{5} \\\\ \\frac{2}{5} & \\frac{3}{5} \\end{bmatrix}\\!
		\\!\\def\\arraystretch{1}\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\!
		= \\!\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\! = 1 x_1
	`}),t[4]||(t[4]=x("br",null,null,-1)),l(n,{exp:"\\Rightarrow ~ \\lambda_1 = 1"}),t[5]||(t[5]=x("br",null,null,-1)),t[6]||(t[6]=x("br",null,null,-1)),t[7]||(t[7]=r(" 用 ")),l(n,{exp:"\\text{tr}(A)"}),t[8]||(t[8]=r(" 求 ")),l(n,{exp:"A"}),t[9]||(t[9]=r(" 的最後一個特徵值：")),t[10]||(t[10]=x("br",null,null,-1)),l(n,{exp:"\\text{tr}(A) = \\lambda_1 + \\lambda_2 = \\frac{6}{5}"}),t[11]||(t[11]=x("br",null,null,-1)),l(n,{exp:"\\Rightarrow ~ 1 + \\lambda_2 = \\frac{6}{5}"}),t[12]||(t[12]=x("br",null,null,-1)),l(n,{exp:"\\Rightarrow ~ \\lambda_2 = \\frac{1}{5}"}),t[13]||(t[13]=x("br",null,null,-1)),t[14]||(t[14]=x("br",null,null,-1)),t[15]||(t[15]=r(" 求特徵向量 ")),l(n,{exp:"x_2"}),t[16]||(t[16]=r("： ")),l(n,{c:"",exp:`
		(A - \\lambda_2 I) x_2
		= \\!\\def\\arraystretch{1.35}\\begin{bmatrix} \\frac{2}{5} & \\frac{2}{5} \\\\ \\frac{2}{5} & \\frac{2}{5} \\end{bmatrix}\\! x_2
		= 0
	`}),t[17]||(t[17]=r(" 取 ")),l(n,{exp:"x_2 = \\!\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}\\!"}),t[18]||(t[18]=x("br",null,null,-1)),t[19]||(t[19]=x("br",null,null,-1)),l(n,{exp:"A"}),t[20]||(t[20]=r(" 可對角化")),t[21]||(t[21]=x("br",null,null,-1)),l(n,{exp:"\\Rightarrow ~ A"}),t[22]||(t[22]=r(" 的特徵向量組成的對角化矩陣 ")),l(n,{exp:"P"}),t[23]||(t[23]=r(" 必可逆")),t[24]||(t[24]=x("br",null,null,-1)),l(n,{exp:"\\Rightarrow ~ A"}),t[25]||(t[25]=r(" 的特徵向量可形成 ")),l(n,{exp:"\\R^2"}),t[26]||(t[26]=r(" 的一組基底")),t[27]||(t[27]=x("br",null,null,-1)),l(n,{exp:"\\Rightarrow ~ x = c_1 x_1 + c_2 x_2"}),t[28]||(t[28]=x("br",null,null,-1)),t[29]||(t[29]=r(" 本題恰好 ")),l(n,{exp:"x = x_1 + x_2"}),t[30]||(t[30]=x("br",null,null,-1)),t[31]||(t[31]=x("br",null,null,-1)),t[32]||(t[32]=r(" 根據 ")),l(n,{exp:"A^n x = \\lambda^n x"}),t[33]||(t[33]=r("： ")),l(n,{c:"",exp:`
		\\begin{split}
			A^n x &= A^n (x_1 + x_2) \\\\
				&= A^n x_1 + A^n x_2 \\\\
				&= \\lambda_1^n x_1 + \\lambda_2^n x_2 \\\\
				&= 1^n x_1 + (\\tfrac{1}{5})^n x_2
		\\end{split}
	`}),t[34]||(t[34]=r(" 求極限： ")),l(n,{c:"",exp:`
		\\begin{split}
			\\lim\\limits_{n \\to \\infty} A^n x &= \\lim\\limits_{n \\to \\infty} (x_1 + (\\tfrac{1}{5})^n x_2) \\\\
				&= x_1 + \\lim\\limits_{n \\to \\infty} (\\tfrac{1}{5})^n x_2 \\\\
				&= x_1 + 0 x_2 \\\\
				&= x_1 \\\\
				&= \\!\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\! = \\!\\begin{bmatrix} a \\\\ b \\end{bmatrix}\\!
		\\end{split}
	`}),l(n,{exp:"2a + b = 3"}),t[35]||(t[35]=x("br",null,null,-1)),t[36]||(t[36]=x("br",null,null,-1)),t[37]||(t[37]=r(" Ans: (D) "))],64)}const g=b(o,[["render",s]]);export{g as default};
