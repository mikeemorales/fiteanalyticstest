import * as React from "react"
import "../components/layout.css"
import headerImage from "../images/data-image.png"
import fitePartners from "../images/fite_partners.png"
import stocksGraphic from "../images/stocks.png"
import fiteLogo from "../images/fite-logo.png"
import apiIcon from "../images/api.jpg"
import batchIcon from "../images/batch.jpg"
import cashApi from "../images/cash-api.jpg"
import sdkIcon from "../images/sdk-icon.jpg"

// markup
const IndexPage = () => {

  return (
    <main>
      <nav class="nav">
            <div class="nav-logo">
                <img src={fiteLogo} alt="fite analytics logo" />
            </div>
            <ul class="navbar-nav">
                <li>Services</li>
                <li>Documents</li>
                <li>Developers</li>
                <li>Community</li>
                <li>About</li>
                <li><button className="nav-app-btn">FITE App</button></li>
            </ul>
        </nav>
        
      <header className="header">
          <div className="row-50">
            <h1>Capital Markets Data &amp; Analytics</h1>
            <p><h4>Comprehensive coverage of the global bond markets, in the cloud.</h4></p>
            <button className="btn-header">How It Works</button>
          </div>
          <div className="row-50">
          <img src={headerImage} alt="Data analytics for header section" className="header-image"/>
          </div>
      </header>

      <div className="container spacing">
      <h2>One Subscription for All Sectors of the Global Bond Markets.</h2>
      </div>
      <div className="container">
      <h3>A single subscription includes all reference data -- terms and conditions, 
          schedules, curves, swap rates and prepayment models.</h3>
      </div>

      <div className="container spacing">
        <div className="row-50">
          <img src={stocksGraphic} alt="securities and portfolios" />
        </div>
        <div className="row-50">
          
        <h2>Analytics for Securities and Portfolios</h2>
          <p>
            Analyze any security as of any date, at any price. Submit 3 data
            points - <strong>SECURITY ID, DATE, PRICE</strong> - and receive a full analysis of the security.
          </p>
          <p>
            Analyze any portfolio as of any date, at market or scenario prices. Submit
            portfolio holdings information and receive calculations on <strong>Portfolio Risk, Return and Performance Attribution.</strong>
          </p>
          <button className="btn-analytics">View Analytics</button>
        </div>
      </div>

      <div className="container">
      <div className="row-50">
            <h2>Get Results via API or Batch</h2>
            <p>Make individual API requests over HTTP, or send us a large list of securities to analyze 
              and we will send you back the results. All of our calculations are available through either 
              delivery mode, including complex result sets such as cash flow vectors, scenario and stress 
              tests, and key rate durations.</p>
        </div>
        <div className="row-25">
          <span><img src={apiIcon} alt="get results via api" className="api-icon" /></span>
        <button className="btn-api-batch">API</button>
        </div>
        <div className="row-25">
          <span><img src={batchIcon} alt="send a batch request" className="batch-icon" /></span>
        <button className="btn-api-batch">Batch</button>
        </div>
        
      </div>

      <div className="spacing">
      <div className="container-alt">
          <div className="row-25">
              <h2>$12T</h2>
              <span><h3>Notional Value Analyzed Daily</h3></span>
            </div>
          <div className="row-25">
              <h2>3 Million</h2>
              <span><h3>Securities in SecDB</h3></span>
            </div>
          <div className="row-25">
              <h2>40 min</h2>
              <span><h3>time to analyze 300,000 securities</h3></span>
            </div>
          <div className="row-25">
              <h2>12+</h2>
              <span><h3>Source Vendor Integrations</h3></span>
            </div>
      </div>
      </div>


      <div className="container spacing">
      <h2>Superpowers for Quantitative Developers.</h2>
      </div>
      <div className="container">
      <h3 className="margin-80">Check out the <span className="link-color">documentation</span>, 
      the <span className="link-color">quick start</span> or a guide below to integrate your workflows 
        and your portfolio content with APIs and batch processes.</h3>
      </div>

      <div className="container spacing">
       <div className="row-25 card">
         <img src={apiIcon} alt="analytics apis" className="card-icon" />
         <h4>Analytics APIs</h4>
         <h5>Simplify the process of integrating Fite Analytics into your project.</h5>
         </div>
       <div className="row-25 card">
       <img src={cashApi} alt="batch files" className="card-icon"/>
         <h4>Cash Flow APIs</h4>
         <h5>The most granular and accurate cash flow projections available.</h5>
       </div>
       <div className="row-25 card">
         <img src={batchIcon} alt="batch files" className="card-icon"/>
         <h4>Batch Files</h4>
         <h5>Withdraw the reserves of any ERC20 token on Uniswap and execute arbitrary logic.</h5>
       </div>
       <div className="row-25 card">
       <img src={sdkIcon} alt="batch files" className="card-icon"/>
         <h4>SDK</h4>
         <h5>How-to Guides and Recipes.</h5>
       </div>
      </div>

      <div className="container">
        <div className="row-30">
          <div className="row-70">
            <h2>CORP</h2>
            <span>global coverage</span>
          </div>
          <div className="row-70">
            <h2>MUNI</h2>
            <span>30M CUSIPs</span>
          </div>
          <div className="row-70">
            <h2>GOV</h2>
            <span>All Currencies</span>
          </div>
          <div className="row-70">
            <h2>STRUCTURED</h2>
            <span>RMBS CMBS CMO CLO CDO ABS</span>
          </div>
        </div>

        <div className="row-70">
          <img src={fitePartners} alt="fite partners" className="partners-img" />
        </div>
      </div>
      
      <div className="spacing">
        <div className="footer">
          <div className="row-70-fluid">
              <ul className="footer-nav">
                <li><h4>Services</h4></li>
                <li>Security Analytics</li>
                <li>Security Cash Flows</li>
                <li>Portfolio Analytics</li>
                <li>Performance Attribution</li>
                <li>Value at Risk</li>
              </ul>
              <ul className="footer-nav">
                <li><h4>Documents</h4></li>
                <li>How It Works</li>
                <li>Methodology</li>
                <li>Technology</li>
                <li>Security Coverage</li>
                <li>Corporate Litepaper</li>
              </ul>
              <ul className="footer-nav">
                <li><h4>Developers</h4></li>
                <li>GitHub</li>
                <li>Developer Guide</li>

              </ul>
              <ul className="footer-nav">
                <li><h4>Community</h4></li>
                <li>Discord</li>
                <li>Twitter</li>
                <li>Reddit</li>
              </ul>
              <ul className="footer-nav">
                <li><h4>About</h4></li>
                <li>Blog</li>
                <li>Company Info</li>
                <li>FAQ</li>
                <li>Jobs</li>
              </ul>
          </div>
         
          <div className="row-30">
            <h4>Subscribe to our newsletter for updates</h4>

            <div className="row-50-fluid">
              <input type="text" placeholder="Email Address..."/>
              <input type="button" value=">>"/>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}

export default IndexPage
