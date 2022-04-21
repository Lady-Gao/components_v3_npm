import{_ as e,r as a,o,a as c,e as s,w as l,F as u,b as n,d as i,c as r}from"./app.ab862756.js";const k={},d=n("h1",{id:"\u9F20\u6807\u5DE5\u5177-mousetool",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9F20\u6807\u5DE5\u5177-mousetool","aria-hidden":"true"},"#"),i(" \u9F20\u6807\u5DE5\u5177\uFF08MouseTool)")],-1),b=n("p",null,"\u901A\u8FC7\u7528\u6237\u5728\u5730\u56FE\u56FE\u9762\u7684\u9F20\u6807\u64CD\u4F5C\uFF0C\u7ED8\u5236\u76F8\u5E94\u7684\u70B9\u3001\u7EBF\u3001\u9762\u8986\u76D6\u7269\uFF1B",-1),g=n("p",null,"\u70B9\u6807\u8BB0 marker",-1),m=n("p",null,"\u6298\u7EBF\u8986\u76D6\u7269 polyline",-1),h=n("p",null,"\u591A\u8FB9\u5F62\u8986\u76D6\u7269 polygon",-1),v=n("p",null,"\u5706\u5F62\u8986\u76D6\u7269 rectangle",-1),y=n("p",null,"\u77E9\u5F62\u8986\u76D6\u7269 circle",-1),f=r(`<h4 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MouseTool</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>marker<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u57FA\u7840\u7528\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5-1" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h4><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u4EE3\u7801</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MouseTool</span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>fenceManageType<span class="token punctuation">&#39;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>MouseToolRef<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeType(<span class="token punctuation">&#39;</span>marker<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u753B\u70B9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeType(<span class="token punctuation">&#39;</span>polyline<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u753B\u6298\u7EBF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeType(<span class="token punctuation">&#39;</span>polygon<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u753B\u591A\u8FB9\u5F62<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeType(<span class="token punctuation">&#39;</span>rectangle<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u753B\u77E9\u5F62<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeType(<span class="token punctuation">&#39;</span>circle<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u753B\u5706<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remove<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u6E05\u9664 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u5173\u95ED\u7ED8\u5236 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fenceManageType <span class="token operator">=</span> ref<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;marker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MouseToolRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u66F4\u6539\u7C7B\u578B</span>
<span class="token keyword">function</span> <span class="token function">changeType</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fenceManageType<span class="token punctuation">.</span>value <span class="token operator">=</span> val<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token comment">//\u6E05\u9664</span>
<span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  MouseToolRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u5173\u95ED\u7ED8\u5236</span>
<span class="token keyword">function</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  MouseToolRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></details><h4 id="mousetool\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#mousetool\u5C5E\u6027" aria-hidden="true">#</a> MouseTool\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>position</td><td>\u5728\u5730\u56FE\u4E0A\u663E\u793A\u7684\u4F4D\u7F6E\u4FE1\u606F</td><td>Array</td><td>[lng,lat]</td><td>[]</td></tr><tr><td>content</td><td>\u4FE1\u606F\u7A97\u4F53\u5916\u6846\u4E2D\u663E\u793Acontent\u5185\u5BB9</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h4 id="mousetool\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#mousetool\u65B9\u6CD5" aria-hidden="true">#</a> MouseTool\u65B9\u6CD5</h4><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>remove</td><td>\u6E05\u9664\u8986\u76D6\u7269</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\uFF0C\u5E76\u6E05\u9664\u8986\u76D6\u7269</td><td>-</td></tr></tbody></table><h4 id="mousetool\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#mousetool\u4E8B\u4EF6" aria-hidden="true">#</a> MouseTool\u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>draw</td><td>\u9F20\u6807\u5DE5\u5177\u7ED8\u5236\u8986\u76D6\u7269\u7ED3\u675F\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td><td>obj(\u5F53\u524D\u7ED8\u5236\u5BF9\u8C61),overlays(\u6240\u6709\u7ED8\u5236\u7684\u5BF9\u8C61\u6570\u7EC4)</td></tr></tbody></table>`,10);function _(q,T){const t=a("MapTool"),p=a("Map");return o(),c(u,null,[d,b,g,m,h,v,y,s(p,null,{default:l(()=>[s(t,{type:"polygon"})]),_:1}),f],64)}var x=e(k,[["render",_],["__file","MouseTool.html.vue"]]);export{x as default};