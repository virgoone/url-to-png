import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.C3Zxep_Z.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"encryption/index.md","filePath":"encryption/index.md"}'),t={name:"encryption/index.md"},e=n(`<h2 id="generating-an-encryption-key" tabindex="-1">Generating an Encryption Key <a class="header-anchor" href="#generating-an-encryption-key" aria-label="Permalink to &quot;Generating an Encryption Key&quot;">​</a></h2><p>To enable encryption, first generate a CRYPTO_KEY. You can do this in your browser console using the following JavaScript code:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cryptoKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.crypto.subtle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AES-GCM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      length: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;encrypt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;decrypt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> exportedKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.crypto.subtle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exportKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jwk&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cryptoKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(exportedKey);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(console.log);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {&quot;alg&quot;:&quot;A256GCM&quot;,&quot;ext&quot;:true,&quot;k&quot;:&quot;3A.......</span></span></code></pre></div><h2 id="setting-the-encryption-key" tabindex="-1">Setting the Encryption Key <a class="header-anchor" href="#setting-the-encryption-key" aria-label="Permalink to &quot;Setting the Encryption Key&quot;">​</a></h2><p>Set the generated key as your server <code>CRYPTO_KEY</code>. This key will be used for encryption and decryption. Wrap the <code>CRYPTO_KEY</code> environment variable in single quotes <code>&#39;{}&#39;</code>.</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CRYPTO_KEY=&#39;{&quot;alg&quot;:&quot;A256GCM&quot;,&quot;ext&quot;:true,&quot;k&quot;:&quot;3A.......&#39;</span></span></code></pre></div><h2 id="encrypted-requests" tabindex="-1">Encrypted Requests <a class="header-anchor" href="#encrypted-requests" aria-label="Permalink to &quot;Encrypted Requests&quot;">​</a></h2><p>When the <code>CRYPTO_KEY</code> is set, the server will only receive encrypted requests. An encrypted request can be created using the following code:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { StringEncrypter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@jmondi/string-encrypt-decrypt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createEncryptedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> stringEncrypter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> StringEncrypter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCryptoString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CRYPTO_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> encryptedString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stringEncrypter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://jasonraimondi.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      isFullHeight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      forceReload: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> encryptedString;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createEncryptedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(console.log);</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>An example of using encryption can be found in the <a href="https://github.com/jasonraimondi/url-to-png/blob/main/example-encryption.js" target="_blank" rel="noreferrer">example-encryption.js</a> file.</p><p>Run the example using the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example-encryption.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   CRYPTO_KEY:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;key_ops&quot;:[&quot;encrypt&quot;,&quot;decrypt&quot;],&quot;ext&quot;:true,&quot;kty&quot;:&quot;oct&quot;,&quot;k&quot;:&quot;M8IkabUR_Nhj3B64AXWB2msQsvCj535krL6gR6Z0LEI&quot;,&quot;alg&quot;:&quot;A256GCM&quot;}&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   exampleUrl:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://localhost:3039/?hash=str-enc:DbRfvBa61jg4FU4G75xkvVKS8g/MG2FfKfTTNwVYH4F+DpRBgDFyLyow0yOHgocpSFeFfdgJaet/JwJM+KtmuAcYbSZRJ1ENGNmcyhwZiWfhLdOAyhUlLlu8:sCzLlpiBye9ISIG3&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   hash:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;str-enc:DbRfvBa61jg4FU4G75xkvVKS8g/MG2FfKfTTNwVYH4F+DpRBgDFyLyow0yOHgocpSFeFfdgJaet/JwJM+KtmuAcYbSZRJ1ENGNmcyhwZiWfhLdOAyhUlLlu8:sCzLlpiBye9ISIG3&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span></span></code></pre></div><p>This formatted version separates the README into logical sections, making it easier to understand and follow the instructions for generating an encryption key, setting it up, and making encrypted requests.</p>`,14),p=[e];function h(l,k,r,o,d,E){return a(),i("div",null,p)}const g=s(t,[["render",h]]);export{c as __pageData,g as default};
