import{_ as s,r as u,c as o,o as p,b as t,k as r,i as x,F as f}from"./index-CQCvOr_e.js";const m={};function i(b,n){const l=u("vl");return p(),o(f,null,[n[0]||(n[0]=t(" 遞迴關係式為 ")),r(l,{exp:"a_n - a_{n-1} - 6a_{n-2} = 0"}),n[1]||(n[1]=t("，可知特徵方程式為 ")),r(l,{exp:"\\lambda^2 - \\lambda - 6 = 0"}),n[2]||(n[2]=t("，")),n[3]||(n[3]=x("br",null,null,-1)),n[4]||(n[4]=t(" 求得特徵根 ")),r(l,{exp:"\\lambda = -2, 3"}),n[5]||(n[5]=t("，一般式為 ")),r(l,{c:"",exp:"a_n = h_1(-2)^n + h_2 3^n"}),n[6]||(n[6]=t(" 求生成函數 ")),r(l,{exp:"G(x)"}),n[7]||(n[7]=t(" 的部分分式分解： ")),r(l,{c:"",exp:`
		\\begin{split}
		  G(x) &= \\sum_{n=0}^{\\infty} a_n x^n \\\\
		       &= \\sum_{n=0}^{\\infty} [h_1(-2)^n + h_2 3^n] x^n \\\\
		       &= h_1 \\sum_{n=0}^{\\infty} (-2)^n x^n + h_2 \\sum_{n=0}^{\\infty} 3^n x^n \\\\
		       &= h_1 \\sum_{n=0}^{\\infty} (-2x)^n + h_2 \\sum_{n=0}^{\\infty} (3x)^n \\\\
		       &= h_1 \\frac{1}{1-(-2x)} + h_2 \\frac{1}{1-3x} \\\\
		       &= \\frac{h_1}{1+2x} + \\frac{h_2}{1-3x}
		\\end{split}
	`}),n[8]||(n[8]=t(" 觀察每個選項的特徵根 (分母) ")),r(l,{exp:"\\Rightarrow"}),n[9]||(n[9]=t(" (A) (B) (C) 可能正確")),n[10]||(n[10]=x("br",null,null,-1)),n[11]||(n[11]=x("br",null,null,-1)),n[12]||(n[12]=t(" 由於 ")),r(l,{c:"",exp:"G(0) = a_0 + a_1 0^1 + a_2 0^2 + \\cdots = a_0 = A"}),n[13]||(n[13]=t(" 將 ")),r(l,{exp:"x = 0"}),n[14]||(n[14]=t(" 代入到選項 (A) (B) (C)，求各選項的 ")),r(l,{exp:"G(0)"}),n[15]||(n[15]=t("：")),n[16]||(n[16]=x("br",null,null,-1)),n[17]||(n[17]=t(" (A) ")),r(l,{exp:"A"}),n[18]||(n[18]=t(" (B) ")),r(l,{exp:"A + \\frac{2}{5}B"}),n[19]||(n[19]=t(" (C) ")),r(l,{exp:"A - \\frac{2}{5}B"}),n[20]||(n[20]=x("br",null,null,-1)),r(l,{exp:"\\Rightarrow"}),n[21]||(n[21]=t(" (A) 正確")),n[22]||(n[22]=x("br",null,null,-1)),n[23]||(n[23]=x("br",null,null,-1)),n[24]||(n[24]=t(" Ans: (A) "))],64)}const A=s(m,[["render",i]]);export{A as default};
