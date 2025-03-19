import{_ as m,e as x,c as p,o,i as n,a as s,w as e,g as i,F as d}from"./index-DxRyEaSp.js";const u={};function b(A,t){const l=x("vl"),r=x("OptionAnswer");return o(),p(d,null,[n(r,{option:"A",answer:!0},{default:e(()=>[t[0]||(t[0]=i(" 跡的定義：")),n(l,{exp:"\\text{tr}(A) = \\sum\\limits_{i=1}^n A_{ii}"}),t[1]||(t[1]=s("br",null,null,-1)),t[2]||(t[2]=i(" 根據 ")),n(l,{c:"",exp:`
			\\begin{split}
				\\text{tr}(A+B) &= \\sum\\limits_{i=1}^n (A+B)_{ii} \\\\
					&= \\sum\\limits_{i=1}^n (A_{ii} + B_{ii}) \\\\
					&= \\sum\\limits_{i=1}^n A_{ii} + \\sum\\limits_{i=1}^n B_{ii} \\\\
					&= \\text{tr}(A) + \\text{tr}(B)
			\\end{split}
		`}),t[3]||(t[3]=i(" 分解選項 (A) 的式子： ")),n(l,{c:"",exp:`
			\\begin{split}
				\\text{tr}((A+B)C) &= \\text{tr}(AC+BC) \\\\
					&= \\text{tr}(AC) + \\text{tr}(BC)
			\\end{split}
		`})]),_:1}),t[33]||(t[33]=s("div",{class:"ts-divider is-section"},null,-1)),n(r,{option:"B",answer:!1},{default:e(()=>[t[4]||(t[4]=i(" 反例： ")),n(l,{c:"",exp:`
			\\left\\{
			\\begin{alignat*}{1}
				&\\text{tr}(I_n I_n) = \\text{tr}(I_n) = n \\\\
				&\\text{tr}(I_n) \\text{tr}(I_n) = n \\cdot n = n^2
			\\end{alignat*}
			\\right.
		`}),t[5]||(t[5]=i(" ※ ")),n(l,{exp:"\\text{det}(AB) = \\text{det}(A) \\text{det}(B)"})]),_:1}),t[34]||(t[34]=s("div",{class:"ts-divider is-section"},null,-1)),n(r,{option:"C",answer:!0},{default:e(()=>[t[6]||(t[6]=i(" 根據矩陣乘法的定義 ")),n(l,{exp:"(AB)_{ij} = \\sum\\limits_{k=1}^n A_{ik} B_{kj}"}),t[7]||(t[7]=i("： ")),n(l,{c:"",exp:`
			\\begin{split}
				\\text{tr}(AB) &= \\sum\\limits_{i=1}^n (AB)_{ii} \\\\
					&= \\sum\\limits_{i=1}^n \\sum\\limits_{k=1}^n A_{ik} B_{ki} \\\\
					&= \\sum\\limits_{k=1}^n \\sum\\limits_{i=1}^n B_{ki} A_{ik} \\\\
					&= \\sum\\limits_{k=1}^n (BA)_{kk} \\\\
					&= \\text{tr}(BA)
			\\end{split}
		`})]),_:1}),t[35]||(t[35]=s("div",{class:"ts-divider is-section"},null,-1)),n(r,{option:"D",answer:!0},{default:e(()=>[t[8]||(t[8]=i(" 求特徵多項式： ")),n(l,{c:"",exp:`
			\\begin{split}
				p(t) &= \\!\\begin{vmatrix} a-t & b+c \\\\ b-c & -a-t \\end{vmatrix}\\! \\\\
						&= -(a-t)(a+t) - (b-c)(b+c) \\\\
						&= -(a^2 - t^2) - (b^2 - c^2) \\\\
						&= t^2 - a^2 - b^2 + c^2
			\\end{split}
		`}),n(l,{exp:"p(\\lambda) = \\lambda^2 - a^2 -b^2 + c^2 = 0"}),t[9]||(t[9]=s("br",null,null,-1)),n(l,{exp:"\\Rightarrow ~ \\lambda = \\pm\\sqrt{a^2 + b^2 - c^2}"}),t[10]||(t[10]=s("br",null,null,-1)),n(l,{exp:"\\Rightarrow"}),t[11]||(t[11]=i(" 若 ")),n(l,{exp:"a^2 + b^2 - c^2 \\ge 0"}),t[12]||(t[12]=i(" 則 ")),n(l,{exp:"\\lambda"}),t[13]||(t[13]=i(" 為實數")),t[14]||(t[14]=s("br",null,null,-1)),n(l,{exp:"\\Rightarrow"}),t[15]||(t[15]=i(" 若 ")),n(l,{exp:"a^2 + b^2 \\ge c^2"}),t[16]||(t[16]=i(" 則 ")),n(l,{exp:"\\!\\begin{bmatrix} a & b+c \\\\ b-c & -a \\end{bmatrix}\\!"}),t[17]||(t[17]=i(" 有實數特徵值 "))]),_:1}),t[36]||(t[36]=s("div",{class:"ts-divider is-section"},null,-1)),n(r,{option:"E",answer:!1},{default:e(()=>[t[18]||(t[18]=i(" 由於 ")),n(l,{exp:"A^3 = I"}),t[19]||(t[19]=i("，")),n(l,{exp:"A"}),t[20]||(t[20]=i(" 的特徵值 ")),n(l,{exp:"\\lambda"}),t[21]||(t[21]=i(" 滿足 ")),n(l,{exp:"\\lambda^3 = 1"}),t[22]||(t[22]=i("。")),t[23]||(t[23]=s("br",null,null,-1)),t[24]||(t[24]=i(" 而 ")),n(l,{exp:"\\lambda"}),t[25]||(t[25]=i(" 為複平面上的三次單位根： ")),n(l,{c:"",exp:`
			\\lambda \\in \\{ 1, \\omega, \\omega^2 \\} ~,~
			\\omega = e^{2 \\pi i / 3} = \\frac{-1 + \\sqrt{3}}{2}
		`}),t[26]||(t[26]=i(" 存在反例 ")),n(l,{exp:"A = \\!\\begin{bmatrix} 1 & 0 \\\\ 0 & \\omega \\end{bmatrix}\\!"}),t[27]||(t[27]=i(" 滿足 ")),n(l,{exp:"A \\neq I"}),t[28]||(t[28]=i(" 和 ")),n(l,{exp:"A^3 = I"}),t[29]||(t[29]=i("，")),t[30]||(t[30]=s("br",null,null,-1)),t[31]||(t[31]=i(" 但 ")),n(l,{exp:"\\text{tr}(A) = 1 + \\omega \\neq 1"}),t[32]||(t[32]=i("。 "))]),_:1})],64)}const B=m(u,[["render",b]]);export{B as default};
