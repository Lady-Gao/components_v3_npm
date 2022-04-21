import{_ as l,r as e,o as u,a as i,e as n,w as o,F as r,b as a,d as k,c}from"./app.ab862756.js";const m={},b=a("h1",{id:"\u5DE1\u822A\u5668-pathsimplifierins",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5DE1\u822A\u5668-pathsimplifierins","aria-hidden":"true"},"#"),k(" \u5DE1\u822A\u5668\uFF08PathSimplifierIns)")],-1),d=a("p",null,"PathSimplifier\u662F\u4E00\u4E2A\u8F68\u8FF9\u5C55\u793A\u7EC4\u4EF6",-1),h=c(`<h4 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h4><h4 id="\u52A8\u6001\u5DE1\u822A-realtime" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5DE1\u822A-realtime" aria-hidden="true">#</a> \u52A8\u6001\u5DE1\u822A realTime</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PathSimplifierIns</span>    
     <span class="token attr-name">model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>realTime<span class="token punctuation">&#39;</span></span> 
    <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>[116.497428, 39.20923]<span class="token punctuation">&#39;</span></span> 
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>realTimeDataIcon<span class="token punctuation">&#39;</span></span>   
   <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u4EE3\u7801</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>[109.488707,18.309754]<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PathSimplifierIns</span>  
               <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>realTimePosition<span class="token punctuation">&#39;</span></span> 
               <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>realTimeIcon<span class="token punctuation">&#39;</span></span>   
               <span class="token attr-name">model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>realTime<span class="token punctuation">&#39;</span></span> 
               <span class="token attr-name">@moveing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>PathSimplifierInsmoveing<span class="token punctuation">&#39;</span></span>
               <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> realTimePosition<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token number">125.397428</span><span class="token punctuation">,</span> <span class="token number">37.20923</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
<span class="token keyword">const</span> realTimeIcon<span class="token operator">=</span><span class="token string">&#39;https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png&#39;</span>


<span class="token keyword">let</span> listPoints<span class="token operator">=</span><span class="token punctuation">[</span>  
        <span class="token punctuation">[</span><span class="token number">113.370643</span><span class="token punctuation">,</span><span class="token number">22.938827</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">113.001181</span><span class="token punctuation">,</span><span class="token number">23.120518</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">112.985037</span><span class="token punctuation">,</span><span class="token number">23.15046</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">113.890205</span><span class="token punctuation">,</span><span class="token number">22.798043</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">110.361899</span><span class="token punctuation">,</span><span class="token number">20.026695</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">113.682288</span><span class="token punctuation">,</span><span class="token number">34.618975</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">121.434529</span><span class="token punctuation">,</span><span class="token number">31.215641</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">109.488707</span><span class="token punctuation">,</span><span class="token number">18.309754</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.682502</span><span class="token punctuation">,</span><span class="token number">28.011099</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.68556</span><span class="token punctuation">,</span><span class="token number">30.912366</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">126.687123</span><span class="token punctuation">,</span><span class="token number">45.787618</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>



<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//\u5B9E\u65F6\u66F4\u6362\u4F4D\u7F6E</span>
     realTimePosition <span class="token operator">=</span>listPoints<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * PathSimplifierIns \u79FB\u52A8\u65F6\u89E6\u53D1
 *  <span class="token keyword">@param</span> <span class="token parameter">val</span> [lng,lat]
 */</span>
<span class="token keyword">function</span> <span class="token function">PathSimplifierInsmoveing</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></details>`,4),g=c(`<h4 id="\u8F68\u8FF9\u5C55\u793A-history" tabindex="-1"><a class="header-anchor" href="#\u8F68\u8FF9\u5C55\u793A-history" aria-hidden="true">#</a> \u8F68\u8FF9\u5C55\u793A history</h4><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u4EE3\u7801</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PathSimplifierIns</span>
              <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>historyData<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>history<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@moveing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>PathSimplifierInsmoveing<span class="token punctuation">&#39;</span></span>
      <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> Icon1<span class="token operator">=</span><span class="token string">&#39;https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png&#39;</span>
<span class="token keyword">let</span> Icon2<span class="token operator">=</span><span class="token string">&#39;https://fs.cvtsp.com/images-shihang-login.png&#39;</span>
<span class="token keyword">const</span> historyData<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.497428</span><span class="token punctuation">,</span> <span class="token number">39.20923</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span>Icon1<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.597428</span><span class="token punctuation">,</span> <span class="token number">36.20923</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> Icon2 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.397428</span><span class="token punctuation">,</span> <span class="token number">37.20923</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span>Icon1 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

<span class="token doc-comment comment">/**
 * PathSimplifierIns \u79FB\u52A8\u65F6\u89E6\u53D1
 *  <span class="token keyword">@param</span> <span class="token parameter">val</span> [lng,lat]
 */</span>
<span class="token keyword">function</span> <span class="token function">PathSimplifierInsmoveing</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></details><h4 id="history\u7684\u4E24\u79CD\u4F20\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#history\u7684\u4E24\u79CD\u4F20\u5165\u65B9\u5F0F" aria-hidden="true">#</a> history\u7684\u4E24\u79CD\u4F20\u5165\u65B9\u5F0F</h4><h4 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h4><p>\u8F68\u8FF9\u66F4\u65B0\u65F6\uFF0C\u56FE\u6807\u4E5F\u9700\u8981\u66F4\u65B0\u65F6\u9002\u7528\u6B64\u65B9\u5F0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PathSimplifierIns</span> 
    <span class="token attr-name">model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>history<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
    { point: [111.497428, 39.20923], icon: icon2 },
    { point: [116.497428, 21.20923], icon: icon1 },
    { point: [113.597428, 36.20923], icon: icon2 },
    { point: [124.697428, 29.280923], icon: icon1 },
    { point: [125.397428, 37.20923], icon: icon2 },
  ]<span class="token punctuation">&quot;</span></span> 
   <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h4><p>\u9002\u7528\u4E8E\u56FE\u6807\u4E0D\u53D8\u7684\u573A\u666F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PathSimplifierIns</span> 
    <span class="token attr-name">model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>history<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ [111.497428, 39.20923], [116.497428, 21.20923], [125.397428, 37.20923] ]<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> icon2</span>
   <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="pathsimplifierins\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#pathsimplifierins\u5C5E\u6027" aria-hidden="true">#</a> PathSimplifierIns\u5C5E\u6027</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model</td><td>\u5DE1\u822A\u65B9\u5F0F\uFF08realTime\u5B9E\u65F6/history\u8F68\u8FF9\uFF09</td><td>string</td><td>realTime/ history</td><td>realTime</td></tr><tr><td>position</td><td>\u4F4D\u7F6E\u4FE1\u606F\uFF08model\u4E3ArealTime\uFF0C\u6539\u503C\u4E3A\u5355\u6570\u7EC4\uFF0Cmodel\u4E3Ahistory\uFF0C\u6570\u7EC4\u5BF9\u8C61\u6216\u8005\u53CC\u91CD\u6570\u7EC4\uFF09</td><td>Array</td><td>[]</td><td></td></tr><tr><td>icon</td><td>\u5DE1\u822A\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>id</td><td>\u5DE1\u822A\u5668\u66F4\u6362\u6807\u8BC6\uFF0Cid\u6539\u53D8\uFF0C\u5C06\u91CD\u7F6E\u5DE1\u822A\u5668</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h4 id="pathsimplifierins\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#pathsimplifierins\u4E8B\u4EF6" aria-hidden="true">#</a> PathSimplifierIns\u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>moveing</td><td>\u79FB\u52A8\u65F6\u7684\u89E6\u53D1</td><td>[lng, lat]</td></tr><tr><td>pointClick</td><td>\u9F20\u6807\u70B9\u51FB\u8282\u70B9\u533A\u57DF\u65F6\u89E6\u53D1</td><td>event , info \uFF08\u76F8\u5173\u7684\u8F68\u8FF9\u4FE1\u606F\uFF09</td></tr></tbody></table>`,13);function v(s,f){const t=e("PathSimplifierIns"),p=e("Map");return u(),i(r,null,[b,d,n(p,{center:[116.497428,39.20923],id:"his1"},{default:o(()=>[n(t,{model:"realTime",position:[116.497428,39.20923],icon:"https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png"},null,8,["position"])]),_:1},8,["center"]),h,n(p,{id:"his2"},{default:o(()=>[n(t,{position:[{point:[116.497428,39.20923],icon:s.Icon1},{point:[113.597428,36.20923],icon:s.Icon2},{point:[115.397428,37.20923],icon:s.Icon1}],model:"history"},null,8,["position"])]),_:1}),g],64)}var q=l(m,[["render",v],["__file","PathSimplifierIns.html.vue"]]);export{q as default};