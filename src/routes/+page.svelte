<script>
    import forms from './forms.js'
 
    export const snapshot = forms.snapshot // This is optional!
</script>

<div style="width: 80vw; min-width: 600px; margin: 0px auto; display: flex; justify-content: space-between; gap: 10vw; padding: 40px;">
    <svelte:component this={forms.signIn} />
    <svelte:component this={forms.signUp} />
</div>

<style>
    :global(form)
    {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :global(form input )
    {
        border-radius: 5px;
        border: 1px solid #E2E2E2;
        padding: 10px;
    }

    :global(form .field )
    {
        margin-bottom: 20px;
    }

    :global(form label )
    {
        font-weight: bold;
        margin-bottom: 5px;
    }

    :global(form .label-wrapper )
    {
        display: flex;
        flex-direction: column;
    }

    :global(form .errors, .field.error )
    {
        color: red;
    }

    :global(form .description )
    {
        margin: 5px 0px;
        font-size: small;
        font-weight: 500;
    }

    :global(form[name="signUp"])
    {
        padding: 20px;
        background: rgba(0,0,0,.08);
        border: 1px solid gainsboro;
        border-radius: 5px;
        box-shadow: 0px 3px 12px 0px rgba( 0, 0, 0, .12);
    }
</style>