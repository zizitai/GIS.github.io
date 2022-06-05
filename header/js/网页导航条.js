function codeCommentRemove(f) {　
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var menuHtml = codeCommentRemove(function () {
    /*
		<!-- 网页导航条开始 -->
		<nav id="导航条">
			<table id="导航条table">
				<tbody>
					<tr id="导航栏网站导航">
						<td>
							<strong style="font-size: 20px;">网站导航</strong>
						</td>
						<td>
							<div id="websitelink" style="text-align: left;">
								&nbsp;&nbsp;
								<a id="导航栏首页" href="./index.html">[首页]</a>
								&nbsp;&nbsp;
								<a id="湖北省人口数量分级图" href="./湖北省人口数量分级.html">湖北省人口分级图</a>
								&nbsp;&nbsp;
								<a id="湖北省人均可支配收入" href="./湖北省人均可支配收入.html">湖北省人均可支配收入</a>
								&nbsp;&nbsp;
								<a id="湖北省各地区生产总值" href="./湖北省各地区生产总值.html">湖北省各地区生产总值</a>
								&nbsp;&nbsp;
								<a id="湖北省公共财政支出" href="./湖北省公共财政支出.html">湖北省公共财政支出</a>
								&nbsp;&nbsp;
								<a id="卷帘操作" href="./demo04.html">卷帘操作</a>
							</div>
						</td>
					</tr>
					<tr id="导航栏友情链接">
						<td>
							<strong style="font-size: 20px;">相关链接</strong>
						</td>
						<td>
							<div id="friendlink" style="text-align: left;">
								&nbsp;&nbsp;
								<a target="_blank" href="https://https://developers.arcgis.com//">[Arcgis Developer]</a>
								&nbsp;&nbsp;
								<a target="_blank" href="https://www.runoob.com/">[菜鸟教程]</a>
								&nbsp;&nbsp;
								
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</nav>
		<!-- 网页导航条结束 -->
    */
});

document.write(menuHtml);