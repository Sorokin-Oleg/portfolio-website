import React, {component} from 'react';


const PortfolioDescription = (props) => {
    return (
        <div className='portfolio-description-container'>{props.description}</div>
    )
}

PortfolioDescription.defaultProps = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum mi sapien, sit amet luctus ante vulputate ac. Praesent a nisl non lectus facilisis consequat nec vel nibh. Aliquam tempor tortor sem, ut mattis eros commodo sed. Fusce fringilla efficitur massa at condimentum. Nunc suscipit, massa sit amet porttitor hendrerit, lectus purus sodales lorem, vitae tempus odio massa quis erat. Nunc sed euismod orci. Suspendisse potenti. Aliquam iaculis sit amet metus non condimentum. Sed ornare turpis nec eros porttitor, vitae vulputate tortor interdum. Sed ac nibh sed sapien facilisis ultricies. Integer eros nibh, interdum eget condimentum non, lobortis vel lectus. Duis imperdiet pharetra risus, quis aliquam lorem lobortis ut. Integer at aliquet dolor. Suspendisse a auctor leo, ac iaculis elit. Nam ac tincidunt elit.  Aliquam malesuada arcu arcu. Integer tempus, orci vel dignissim blandit, arcu mi feugiat nisl, vitae mattis mi tortor sed erat. In posuere ornare velit, eu malesuada ipsum tempus sed. Phasellus erat lectus, porttitor non lectus nec, varius ornare sem. Pellentesque et ligula facilisis, porttitor lorem sed, sodales ante. Donec iaculis, lectus vitae ornare aliquam, massa justo lacinia erat, at porttitor elit purus ornare mauris. Donec eleifend leo vitae dolor rutrum efficitur."
}

export default PortfolioDescription;
