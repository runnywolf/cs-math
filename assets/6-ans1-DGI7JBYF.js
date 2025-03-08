import{_ as x,r as l,c as m,o as a,k as r,b as i,i as b,F as e}from"./index-CQCvOr_e.js";const d={};function s(f,t){const n=l("vl");return a(),m(e,null,[r(n,{exp:"A"}),t[0]||(t[0]=i(" 的 row sum 均為 1")),t[1]||(t[1]=b("br",null,null,-1)),r(n,{exp:"\\Rightarrow"}),t[2]||(t[2]=i(" 存在特徵向量 ")),r(n,{exp:"x_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\!"}),t[3]||(t[3]=i(" 使 ")),r(n,{exp:`
		Ax_1 = \\!\\def\\arraystretch{1.35}\\begin{bmatrix} \\frac{3}{5} & \\frac{2}{5} \\\\ \\frac{2}{5} & \\frac{3}{5} \\end{bmatrix}\\!
		\\!\\def\\arraystretch{1}\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\!
		= \\!\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\! = 1 x_1
	`}),t[4]||(t[4]=b("br",null,null,-1)),r(n,{exp:"\\Rightarrow ~ \\lambda_1 = 1"}),t[5]||(t[5]=b("br",null,null,-1)),t[6]||(t[6]=b("br",null,null,-1)),t[7]||(t[7]=i(" 用 ")),r(n,{exp:"\\text{tr}(A)"}),t[8]||(t[8]=i(" 求 ")),r(n,{exp:"A"}),t[9]||(t[9]=i(" 的最後一個特徵值：")),t[10]||(t[10]=b("br",null,null,-1)),r(n,{exp:"\\text{tr}(A) = \\lambda_1 + \\lambda_2 = \\frac{6}{5}"}),t[11]||(t[11]=b("br",null,null,-1)),r(n,{exp:"\\Rightarrow ~ 1 + \\lambda_2 = \\frac{6}{5}"}),t[12]||(t[12]=b("br",null,null,-1)),r(n,{exp:"\\Rightarrow ~ \\lambda_2 = \\frac{1}{5}"}),t[13]||(t[13]=b("br",null,null,-1)),t[14]||(t[14]=b("br",null,null,-1)),t[15]||(t[15]=i(" 求特徵向量 ")),r(n,{exp:"x_2"}),t[16]||(t[16]=i("： ")),r(n,{c:"",exp:`
		(A - \\lambda_2 I) x_2
		= \\!\\def\\arraystretch{1.35}\\begin{bmatrix} \\frac{2}{5} & \\frac{2}{5} \\\\ \\frac{2}{5} & \\frac{2}{5} \\end{bmatrix}\\! x_2
		= 0
	`}),t[17]||(t[17]=i(" 取 ")),r(n,{exp:"x_2 = \\!\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}\\!"}),t[18]||(t[18]=b("br",null,null,-1)),t[19]||(t[19]=b("br",null,null,-1)),t[20]||(t[20]=i(" 將 ")),r(n,{exp:"A"}),t[21]||(t[21]=i(" 對角化： ")),r(n,{c:"",exp:`
		\\begin{split}
			A &= P D P^{-1} = \\!\\begin{bmatrix} x_1 & x_2 \\end{bmatrix}\\!
					 \\!\\def\\arraystretch{1.35}\\begin{bmatrix} \\lambda_1 & 0 \\\\ 0 & \\lambda_2 \\end{bmatrix}\\!
					 \\!\\def\\arraystretch{1}\\begin{bmatrix} x_1 & x_2 \\end{bmatrix}^{-1} \\\\
				&= \\!\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}\\!
				   \\!\\begin{bmatrix} 1 & 0 \\\\ 0 & \\frac{1}{5} \\end{bmatrix}\\!
					 \\!\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}^{-1}
		\\end{split}
	`}),t[22]||(t[22]=i(" 再求極限 ")),r(n,{c:"",exp:`
		\\begin{split}
			\\lim\\limits_{n \\to \\infty} A^n x &= \\lim\\limits_{n \\to \\infty} (P D P^{-1})^n x \\\\
				&= \\lim\\limits_{n \\to \\infty} P D^n P^{-1} x \\\\
				&= \\lim\\limits_{n \\to \\infty} P \\!\\begin{bmatrix} 1^n & 0 \\\\ 0 & (\\frac{1}{5})^n \\end{bmatrix}\\! P^{-1} x \\\\
				&= P \\!\\def\\arraystretch{1.35}\\begin{bmatrix} 1 & 0 \\\\ 0 & \\lim\\limits_{n \\to \\infty} (\\frac{1}{5})^n \\end{bmatrix}\\! P^{-1} x \\\\
				&= P \\!\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}\\! P^{-1} x \\\\
				&= \\!\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}\\!
				   \\!\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}\\!
					 \\left(\\frac{1}{2} \\!\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}\\! \\right)
					 \\!\\begin{bmatrix} 2 \\\\ 0 \\end{bmatrix}\\! \\\\
				&= \\!\\begin{bmatrix} 1 & 0 \\\\ 1 & 0 \\end{bmatrix}\\!
				   \\!\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\! \\\\
				&= \\!\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}\\! = \\!\\begin{bmatrix} a \\\\ b \\end{bmatrix}\\!
		\\end{split}
	`}),r(n,{exp:"2a+b = 3"}),t[23]||(t[23]=b("br",null,null,-1)),t[24]||(t[24]=b("br",null,null,-1)),t[25]||(t[25]=i(" Ans: (D) "))],64)}const u=x(d,[["render",s]]);export{u as default};
