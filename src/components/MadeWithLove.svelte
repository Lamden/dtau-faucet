<script>
	import heart from '../../static/img/icon_heart.svg'
</script>
<style>
	.container{
		display: flex;
		flex-direction: row;
		justify-content: center;
		min-height: 70px;
		align-items: flex-start;
        margin-top: 20px;
        font-weight: 200;
	}

	.heart{
		margin: 0 4px;
		position: relative;
		width: 13px;
		top: 1px;
	}
</style>

<div class="container">
    {'Made with'}
    <div class="heart">{@html heart}</div>
    {'by Lamden'}
</div>