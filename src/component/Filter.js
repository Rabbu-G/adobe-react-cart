import React from 'react';
import "../Sass/Filter.scss";


function Filter() {
    return (
<div className="container filter">
      <div>
            <h4>Filters</h4>
            <hr />
          </div>
          <div>
            <h6>Size</h6>
            <ul>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>X-Small</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Small</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Medium</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Large</label>
                </li>
            </ul>
            <div className="showmore">
              <a href="#show" class="">
                <p>show more</p>
              </a>
            </div>
            <hr />
          </div>
          <div>
            <h6>Style</h6>
            
            <ul>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Outdoor</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Casual</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Athleisure</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Running</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Active</label>
                </li>
            </ul>
            <hr />
          </div>

          <>
            <div>
              <h6>Color</h6>
            </div>
            <div className="filter-color aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color1"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color2"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color3"></div>
                </div>
            </div>

            <div className="filter-color aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color4"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color5"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color6"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color7"></div>
                </div>
            </div>

            <div className="filter-color aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color8"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div class="color9"></div>
                </div>
            </div>
          </>

          <hr />
          <div>
            <h6>Brand</h6>
            <ul>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Calvin Klein</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Dolce & Gabbana</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Miu Miu</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Pada</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Gucci</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Rag & Bone</label>
                </li>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Chanel</label>
                </li>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Marni</label>
                </li>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Dior</label>
                </li>

            </ul>
            <hr />
          </div>
    </div>
    )
}

export default Filter