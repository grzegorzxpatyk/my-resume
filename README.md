# My resume in React

## React Project Structure

-   App - statefull component, fetches data.
    -   Resume - loads all the props
        -   Bio - has full name, contact-info and about section. should load ...props.bio object
        -   Experience - has Job components in it
            -   Job - position, company, location, duration, description
        -   Education - has School components in it
            -   School - name, degree, duration, location
        -   Skills - has Skill components in it
            -   skill - name, level(should be like _n out of 5_ or smthin)
        -   Interests - just some description, that's all.

backend in strapi will come in the future.
