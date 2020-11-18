<template>
    <div class="tabel">
        <table>
        <!-- <div class="general"> -->
            <tr>
                <td><h1>Nama</h1></td>
                <td><p>Bobby</p></td>
            </tr>
            <tr>
                <td><h1>Alamat</h1></td>
                <td><p>Jl Ganesha no 10</p></td>
            </tr>
            <tr>
                <td><h1>Umur</h1></td>
                <td><p>13.5 Tahun</p></td>
            </tr>
            <tr>
                <td><h1>Golongan Darah</h1></td>
                <td><p>A</p></td>
            </tr>
        <!-- </div> -->
        <!-- <div class="info"> -->
        <!-- </div> -->
        </table>

    </div>
</template>

<script>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    .container {
        overflow: hidden;
        display: flex;
        width: 100%;
        height: 100%;
        margin: 8rem;
        padding: 0px 15rem;
    }
    h1{
        font-family: 'Roboto',sans-serif,Helvetica;
        font-size: 3.4rem;
        margin:25px;
        font-weight: 300;
        width: 100%;
    }
    .td{
        align-content: center;
        vertical-align: bottom;
    }
    table{
        align-self: center;
        margin: 8rem;
        width: 100%;
    }
    tbody{
        vertical-align: bottom;
    }
    p{
        margin-left:0px;
        font-size: 2.5rem;
    }
    .tabel{
        width: 100%;
    }
</style>